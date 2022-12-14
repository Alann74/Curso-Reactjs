import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ItemCount from '../ItemCount/ItemCount'
import './Counter.css'


const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if(count >= 1 ) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h3>Blusa</h3>
            <h3>{count}</h3>
            <button className='button' onClick={decrement}>-</button>
            <button className='button' onClick={increment}>+</button>
            <button className='button' onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const Counter = ({ id = '1', name = 'producto', img = '', category = 'celular', description = 'descripcion', price = 2000, stock = 10 }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)


    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (      
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='./blusa'>Ver carrito</Link>
                    )
                }
            </footer>
            
    )
}

export default Counter