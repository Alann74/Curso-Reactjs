import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

function Navbar1() {
  const [page, setPage] = useState('productos')

  return (
    <>
      <Navbar bg="dark" variant="dark" className='Navbar'>
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
            <Nav.Link ><Link to='remera' className='Cont'>Remeras</Link></Nav.Link>
            <Nav.Link onClick={() => setPage('blusas')} ><Link to='blusa' className='Cont'>Blusa</Link></Nav.Link>
            <Nav.Link onClick={() => setPage('pantalones')}>Pantalones</Nav.Link>
            {/* {page === 'pantalones' ? <Pantalones/> : null } */}
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