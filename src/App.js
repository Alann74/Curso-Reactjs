// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainer1 from './components/ItemListContainer/ItemListContainer1';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
// import  Button  from "./Button/Button.js";

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Se agrego al carrito ' + quantity)
  }
  return (
    <div className="App">
      {/* ACA AGREGAR TODOS LOS COMPONENTES */}
        <Navbar/>
        <ItemListContainer1 className="saludo" greeting='Hola, Bienvenidos!'/>
        <ItemListContainer1 greeting='ZAFIRA'/>
        <hr></hr>
        {/* <Button /> */}
        <h1>Productos</h1>
        <button onClick={() => setShow(!show)}>show/hide</button>
        <Counter initial={0} stock={15} onAdd={handleOnAdd}/>
        { show ? <ItemListContainer /> : null}
    </div>
  );
}

export default App;
