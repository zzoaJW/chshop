import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import data from './data.js';
import DetailPage from './pages/detailPage.js';

function App() {

  let [furnitures] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">z(0o0a)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Sweet</Nav.Link>
            <Nav.Link href="/detail">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <HomePage furnitures={furnitures}/>
        }/>
        <Route path='/about' element={
          <div>z(0o0a)가 뭐냐면...</div>
        }/>
        <Route path='/detail' element={
          <DetailPage/>
        }/>
      </Routes>
      
    </div>
  );
}

function HomePage(props){
  return (
    <>
      <div className='main-banner' href='https://www.naver.com/'/>

      <Container>
        <Row>
          {
            props.furnitures.map(function(f, i){
              return (
                <Card furnitures={f}/>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

function Card(props){
  return (
    <Col sm>
      <img src={props.furnitures.img} width="80%"/>
      <h4>{props.furnitures.title}</h4>
      <p>{props.furnitures.content}</p>
    </Col>
  )
}

export default App;
