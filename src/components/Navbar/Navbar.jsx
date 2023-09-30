import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>Ecommerce</h1>
            <section>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar