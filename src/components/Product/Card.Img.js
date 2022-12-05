import { getBlusas } from "../../asyncMock";
import { useState, useEffect} from 'react'
import Blusas from "./Blusas";

const Blusas2 = () => {
    const [Blusas, setProduct] = useState([])
    useEffect(() => {
        setProduct()
          .then(response => {
            setProduct(response)
          })
          .catch(error => {
            console.log(error)
          })  
    }, [])
    return (
        <div>
            { 
                Blusas.map(note => (
                    <Blusas key={Blusas.imagen} Blusas={Blusas}/>
                )) 
            } 
        </div>
    )
}


export default Blusas