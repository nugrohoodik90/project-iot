import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="raw justify-content-center">
            <nav className="navbar">
                <ul className="nav justify-content-center ">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/*  belum di buat alamatnya
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
