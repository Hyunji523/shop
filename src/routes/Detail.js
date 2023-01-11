import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App.js'
 
function Detail(props){

    let {재고} =useContext(Context1) //보관함 해체

    let [fade, setFade] = useState('');
    useEffect(()=>{
        //mount, update시 실행됨
        let a = setTimeout(() => {
            setSale(false)
        }, 2000);
        setTimeout(() => {
            setFade('end')
        }, 20);
        return () => {
            //useEffect 실행되기 전에 실행함 기존코드 치우기
            clearTimeout(a)
            setFade('')
        }
    }, []) //mount될때만 실행

    let [sale, setSale] = useState(true);
    let [tap, setTap] = useState(0);

    let {id} = useParams();
    let img = Number(id)+1;
    let num = props.shoes.find((s) => s.id == id) //조건에 맞는 자료 찾기

    return(
        <div className={"start "+fade}>
        <div className="container">
            {
                sale == true 
                ? <div className="alert alert-warning">
                    2초이내 구매시 할인!!
                </div> : null
            }
        <div className="row">
            <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+img+'.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{num.title}</h4>
            <p>{num.content}</p>
            <p>{num.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div> 
        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=> { setTap(0) }}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=> { setTap(1) }}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=> { setTap(2) }}>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <Tap tap={tap} shoes={props.shoes}></Tap>
        </div> 
        </div>
    )
}

function Tap(props){
    let [fade, setFade] = useState('');
    let {재고} =useContext(Context1) 
    //tap변할때 end 클래스 붙여
    useEffect(()=>{
        setTimeout(() => {
            setFade('end');
        }, 100); 
        //cleanup : useEffect 실행 전
        return ()=>{
            setFade('');
        }
    },[props.tap])
    return (<div className={'start '+fade} >{
        [ <div>{props.shoes[0].title}</div>, <div>{재고[1]}</div>, <div>내용2</div> ][props.tap] 
    }</div>)
}

export default Detail;