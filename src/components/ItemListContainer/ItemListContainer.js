
import { useState, useEffect } from "react"

const ItemListContainer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('funcion dentro del effect')

        return () => console.log('el componente se va a desmontar')
    }, [])

    useEffect(() => {
        console.log('cambio count') 
        return () => console.log('antes de cambiar el count')
    }, [count])

    console.log('render')
    return (
        <div>
            <h1>Sumar clicks</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">sumar uno</button>
        </div>
    )
}
// esto va en APP
/* <button className="btn btn-primary" onClick={() => setShow(!show)}>show/hide</button> */
/* <Counter initial={0} stock={15} onAdd={handleOnAdd}/> */
/* /* { show ? <ItemListContainer /> : null} */

export default ItemListContainer