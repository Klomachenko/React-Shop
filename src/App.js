import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail';

function App() {
  let [shoes] = useState(data);

  return (
    <div className='App'>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/detail'>Detail</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map(function (a, i) {
                    return <Card shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
            </>
          }
        ></Route>
        <Route
          path='/detail'
          element={
            <div>
              <Detail></Detail>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='80%'
        alt='product'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
