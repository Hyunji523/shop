import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'>
      </div>
      <div className="container">
        <div className="row">

          <Product shoes={shoes}> </Product>

        </div>
      </div>


    </div>
  );
}

function Product(props){
  return(
    props.shoes.map(function(a,i){
    <div className="col-md-4">
        <img width="80%" src="https://codingapple1.github.io/shop/shoes1.jpg"/>
        <h4>props.shoes[i].title</h4>
        <p>props.shoes[i].price</p>
    </div>
    })
  )
}

export default App;
