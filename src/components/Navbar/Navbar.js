import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as router } from "react-router-dom";

function Navbar1() {
  const [ setPage] = useState('productos')

  return (
    <>
      <Navbar bg="dark" variant="dark" className='Navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo zafira"
              src="/images/logo.png"
              width="65"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container>
        <Navbar bg="dark" variant="dark">
        <Container className='Cont'>
          <Navbar.Brand><Link to='menu' className='Cont'>Menú</Link></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link ><Link to='remera' className='Cont'>Remeras</Link></Nav.Link>
            <Nav.Link onClick={() => setPage('blusas')} ><Link to='blusa' className='Cont'>Blusa</Link></Nav.Link>
            <Nav.Link onClick={() => setPage('pantalones')}>Pantalones</Nav.Link> */}
            <ReactBootStrap.NavDropdown
              title="Productos"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item>
                <Nav.Link ><Link to='remera' className='Cont'>Remeras</Link></Nav.Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                <Nav.Link onClick={() => setPage('blusas')} ><Link to='blusa' className='Cont'>Blusa</Link></Nav.Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                Pantalones
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
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