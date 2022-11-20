import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget'

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo zafira"
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ZAFIRA
          </Navbar.Brand>
        </Container>
        <Navbar bg="dark" variant="dark">
        <Container className='Cont'>
          <Navbar.Brand href="#Menu">Menú</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Remeras">Remeras</Nav.Link>
            <Nav.Link href="#Blusas">Blusas</Nav.Link>
            <Nav.Link href="#Pantalones">Pantalones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartWidget />
      
      </Navbar>
    </>
  );
}

export default Navbar1;