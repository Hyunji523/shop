import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    useEffect(()=>{
        //mount, update시 실행됨
        let a = setTimeout(() => {
            setSale(false)
        }, 2000);
        return () => {
            //useEffect 실행되기 전에 실행함
            //기존코드 치우기
            clearTimeout(a)
        }
    }, []) //mount될때만 실행

    let [sale, setSale] = useState(true);
    let [input, setInput] = useState('');

    useEffect(()=>{
        if (isNaN(input) == true){
            alert("숫자만 입력해")
        }
    },[input])

    let {id} = useParams();
    let img = Number(id)+1;
    let num = props.shoes.find((s) => s.id == id) //조건에 맞는 자료 찾기
    return(
        <>
        <div className="container">
            {
                sale == true 
                ? <div className="alert alert-warning">
                    2초이내 구매시 할인!!
                </div> : null
            }
        <div className="row">
            <input onChange={ (e)=>{ setInput(e.target.value) }} />
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
        </div> 
        </>
    )
}
export default Detail;