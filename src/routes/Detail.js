import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props){

    let {id} = useParams();
    console.log(id);
    let img = Number(id)+1;
    let num = props.shoes.find((s) => s.id == id) //조건에 맞는 자료 찾기
    return(
        <>
        <div className="container">
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
        </div> 
        </>
    )
}
export default Detail;