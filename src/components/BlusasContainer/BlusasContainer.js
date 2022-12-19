import { useState, useEffect } from "react";
import { getBlusas } from "../../asyncMock";
import BlusasList from "../BlusasList/BlusasList";

const BlusasContainer = () => {
    const [blusas, setBLusas] = useState([])

    useEffect(() => {
        getBlusas()
          .then(response => {
            setBLusas(response)
          })
          .catch(error => {
            console.log(error)
          })  
    }, [])

    return(
        <div>
           <h1>Blusas</h1>
           <BlusasList blusas={blusas}/>
        </div>
    )
}

export default BlusasContainer