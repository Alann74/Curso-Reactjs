// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      {/* ACA AGREGAR TODOS LOS COMPONENTES */}
        <Navbar/>
        <ItemListContainer className="saludo" greeting='Hola, Bienvenidos!'/>
        <ItemListContainer greeting='ZAFIRA'/>
    </div>
  );
}

export default App;
