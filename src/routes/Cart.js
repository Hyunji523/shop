import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { upCount } from './../store.js';

function Cart(){

    let state = useSelector((state)=>{ return state })
    // state.cart = 0 : {id: 0, name: 'White and Black', count: 2}
                //1 : {id: 2, name: 'Grey Yordan', count: 1}
    let dispatch = useDispatch() //store.js에 요청 보내는 함수

    return (
        <div>
            {state.user}
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
                        state.cart.map((a,i)=>{
                            console.log(state.cart)
                            return(
                                <tr>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(upCount(state.cart[i].id)) 
                                    }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>  

        </div>
    )
}

export default Cart