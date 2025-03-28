import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Navbar2() {
    return (
<nav class="navbar navbar-expand-lg" style={{fontFamily:"league spartan", background:"white"}}>
  <div class="container-fluid">
  <Link to="/"><img src="./src/image/1.png" alt="" id='logo'/></Link>
            
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item" style={{marginLeft:"1000px"}}>
          <a class="nav-link" ><Link to="/TutoJeux">Tuto</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Contact">À propos</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Signin">Connexion</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Login">Inscription</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar2;