import cart from './assets/react.svg'

const CartWidget = () => {
    return (
        <button>
        <img src={cart} className='btn btn-danger'/>
            carrito: 0
        </button>
    )
}

export default CartWidget