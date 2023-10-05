import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Ecommerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Celulares</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">tablet</a>
                </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar