import cartImg from './assets/cart.svg'

const CartWidget = () => { 
    return (
        <button>
            {/* <img src={'./images/cart.svg'} alt='cart-widget'/> */}
            <img src={cartImg} alt='cart-widget-import'/>
            +2
        </button>
    )
}

export default CartWidget