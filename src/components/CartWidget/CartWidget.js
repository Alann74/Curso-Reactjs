// import cartImg from './assets/cart.svg'
// import Button from 'react-bootstrap/Button';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const CartWidget = () => { 
    return (
        <button className="btn btn-secondary" href="#" >
            <img src={'./images/cart.svg'} alt='cart-widget'/>
            {/* <img src={cartImg} alt='cart-widget-import'/> */}
            +2
        </button>
    )
}
//-
export default CartWidget