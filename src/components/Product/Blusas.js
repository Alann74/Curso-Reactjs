// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Product.css';
import Counter from '../Counter/Counter';
// import VerMas from './VerMas.js'
import {Link, useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';



function Blusas () {
  const [page, setPage] = useState('productos')
  const navigate = useNavigate()

    return (
    <div className="App1">
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card className='card'>
              <Card.Img src="/images/blusa colorida.jpeg" alt={Blusas.imagen}/>
              <Card.Body>
                <Card.Title>Blusa</Card.Title>
                <Card.Text>
                  Blusa estampada. Art.1974
                </Card.Text>
                <Counter initial={0} stock={15}>BLUSAS</Counter>
                <Nav.Link onClick={() => navigate('Art.1974')}>
                  <Button variant="outline-danger"><Link to='Art.1974' className='Cont'>Ver más</Link></Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>  
    );
  }


export default Blusas