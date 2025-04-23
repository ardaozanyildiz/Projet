import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Navbar2() {
    return (
        <nav className="navbar navbar-expand-lg" style={{fontFamily:"league spartan", background:"white"}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="./src/image/1.png" alt="" id='logo'/>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/TutoJeux" className="nav-link">Tuto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link">À propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Profil" className="nav-link">Profil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Signin" className="nav-link">Connexion</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link">Inscription</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;