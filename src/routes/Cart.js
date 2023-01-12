import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let state = useSelector((state)=>{ return state.cart })
    // state.cart = 0 : {id: 0, name: 'White and Black', count: 2}
                //1 : {id: 2, name: 'Grey Yordan', count: 1}
    
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((a,i)=>{
                            return(
                                <Tr cart={state} i={i}></Tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>  

        </div>
    )
}

function Tr(props){
    return(
        <tr>
            <td>{props.cart[props.i].id}</td>
            <td>{props.cart[props.i].name}</td>
            <td>{props.cart[props.i].count}</td>
            <td><button>변경하기</button></td>
        </tr>
    )
}

export default Cart