import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios';

export let Context1 = createContext()

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10,11,12])
  //use로 시작하는거 = hook 유용한것들 가져다 쓰는거 
  //페이지 이동 도와줌
  let navigate = useNavigate();
  //Route 로 페이지 나눔
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a,i)=>{
                      return(
                        <Card shoes={shoes[i]} i={i+1}> </Card>
                      )
                    })}
                </div>
              </div>
              
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data'+2+'.json').then((결과)=>{
                  let copy = [...shoes, ...결과.data]
                  setShoes(copy)
                  //setShoes(shoes.concat(결과.data));
                })
                .catch(()=>{
                  console.log('실패함')
                })
              }}>더보기</button>
            </>
        }/>
        
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ shoes, 재고 }}>
            <Detail shoes={shoes}/> 
          </Context1.Provider>}/>
        <Route path="*" element={<div>404 없는 페이지 입니다.</div>}/>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  )
  
}

function Card(props){
  return(
    <div className="col-md-4" onClick={ ()=>{window.location.replace("/detail/"+props.shoes.id)} }>
        <img width="80%" src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
