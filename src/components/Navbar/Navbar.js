import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget'
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo zafira"
              src="/images/logo.png"
              width="35"
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
      <CartWidget/>
      <Nav.Link >......</Nav.Link>
      {/* uso este ultimo para darle separacion porque con margin right no pude */}
      </Navbar>
    </>
  );
}

export default Navbar1;