// import Navbar from "../Navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function VerMas() {
    return (
        // <Navbar/>    
        <div className="VerMas">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/blusa colorida.jpeg" />
        <Card.Body>
            <Card.Title>Blusa </Card.Title>
            <Card.Text>
                Blusa lisa lino
            </Card.Text>
            <Button variant="secondary"><Link to='' className='Cont'>Volver</Link></Button>
        </Card.Body>
        </Card>
        </div>        
        );
    }

export default VerMas