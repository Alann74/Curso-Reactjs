// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      {/* ACA AGREGAR TODOS LOS COMPONENTES */}
        <Navbar other ='hola'/>
        
        <ItemListContainer greeting='Hola, Bienvenidos!'/>
    </div>
  );
}

export default App;
