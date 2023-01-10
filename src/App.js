import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js'
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let [shoes] = useState(data);
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
            </>
        }/>

        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="*" element={<div>404 없는 페이지 입니다.</div>}/>
      </Routes>

    </div>
  )
  
}


function Card(props){
  return(
    <div className="col-md-4">
        <img width="80%" src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
