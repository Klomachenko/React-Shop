import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes1.jpg'
              width='80%'
              alt='product1'
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes2.jpg'
              width='80%'
              alt='product2'
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes3.jpg'
              width='80%'
              alt='product3'
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>

      {/* <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
