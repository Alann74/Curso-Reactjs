import './App.css';
// import { useState } from 'react'
// import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './components/Product/Product';
import Remeras from './components/Product/Remeras';
import Blusas from './components/Product/Blusas';
import VerMas from './components/Product/VerMas';
import Footer from './components/Footer/Footer'; 
import Menu from './components/Menu/Menu';
import BlusasContainer from './components/BlusasContainer/BlusasContainer';

function App() {
  return (
    <div className="App">        
        <BrowserRouter>
        <Navbar/>      
        {/* <ItemListContainer1 className="saludo" greeting='Productos'/>       */}
          <Routes>
            <Route path='/menu' element= {<Menu/>} /> 
            <Route path='/blusa' element= {<Blusas/> } /> 
            <Route path='/remera' element= {<Remeras/> } /> 
            <Route path='/blusa/Art.1974' element= {<VerMas/> } /> 
          </Routes>
        <Footer/>    
        </BrowserRouter>
   </div>
  );
}
//1
export default App;
