import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartCount = useSelector(state => state.CartReducers.cartsNumb)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <span>
                    <Link to="/#">
                        <button type="button" className="btn btn-outline-secoondary btn-sm">Login</button>
                    </Link>
                    <Link to="/#">
                        <button type="button" className="btn btn-secondary mx-1 btn-sm">Register</button>
                    </Link>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link p-0 mx-1" to="/cart"><FaShoppingCart size={25} /><small>{cartCount}</small></Link>
                        </li>
                    </ul>
                    <Link to="/#">
                        <button type="button" className="btn btn-link mx-1 mt-2 btn-sm" style={{color:"grey"}}>Payment Methods</button>
                    </Link>
                    <form className="form-inline my-2 ">
                        <input className="form-control mr-sm-2 m-1 btn-sm"  type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-sm m-1" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
