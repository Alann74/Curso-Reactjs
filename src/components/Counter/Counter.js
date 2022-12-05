
import { useState } from 'react'

const Counter = ({ initial, stock, onAdd }) => {
    // console.log('render counter')

    const [count, setCount] = useState(initial)

    const increment = () => {
        // for(var i = 0; i < 5; i++) {
        //     console.log('sumo')
        //     setCount(valorPrevio => valorPrevio + 1)
        // }
        if(count < stock) { //cuando llegue al stock maximo no suma mas
            setCount(count + 1)
        }
    }

    // const reset = () => {
    //     setCount(initial)
    // }

    return (
        <div>
            <h2>{count}</h2>
            <button  className="btn btn-secondary" onClick={() => increment()}>Comprar</button>
            {/* <button  className="btn btn-secondary"onClick={() => reset()}>Borrar</button> */}
            <br></br>
            <br></br>
            <button  className="btn btn-secondary"onClick={() => onAdd(count)}>Agregar al carrito</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default Counter