// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Product.css';
import Counter from '../Counter/Counter';
import Nav from 'react-bootstrap/Nav';
import {Link, useNavigate} from 'react-router-dom'
import BlusasContainer from '../BlusasContainer/BlusasContainer';
// import { useState } from 'react';
// import { getBlusasById } from '../../asyncMock'
// import { useParams } from 'react-router-dom'

const Blusas = ( {blusa} ) => {
    // const [blusa, setBlusa] = useState({})
  // const [isLoading, setIsLoading] = useState(true)
  // const { blusaId } = useParams()
  // const [page, setPage] = useState('productos')
  const navigate = useNavigate()
  //   if(isLoading) {
  //     return <h1>Cargando Nota...</h1>
  // }

    return ( 
      <div className="App1">
        <BlusasContainer/>
        <h2 >{blusa.id}</h2>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <Card className='card'>
                <Card.Img src="/images/blusa colorida.jpeg" alt={Blusas.imagen}/>
                <Card.Body>
                  <Card.Text>
                    
                  </Card.Text>
                  <Counter initial={0} stock={15}>BLUSAS</Counter>
                  <Nav.Link onClick={() => navigate('Art.1974')}>
                    <p></p>
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