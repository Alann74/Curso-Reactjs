// import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Product.css';
import Counter from '../Counter/Counter';

function Remeras () {
    return (
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card className='card'>
              <Card.Img/>
              <Card.Body>
                <Card.Title>Remera</Card.Title>
                <Card.Text>
                  Remera
                </Card.Text>
                <Counter initial={0} stock={15}>REMERA</Counter>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

export default Remeras