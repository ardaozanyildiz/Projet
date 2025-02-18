import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Navbar2() {
    return (
<nav class="navbar navbar-expand-lg" style={{fontFamily:"league spartan", background:"black"}}>
  <div class="container-fluid">
  <Link to="/"><img src="./src/image/Melodify3.png" alt="" id='logo'/></Link>
            
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" style={{marginLeft:"20px"}}><Link to="/SearchArtist">Recherche</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Jeux">Jeux</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/Contact">Contact</Link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" button="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#cd36ff", cursor:"pointer"}}>
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" ><Link to="/AboutArda">Arda</Link></a></li>
            <li><a class="dropdown-item" ><Link to="/AboutHamza">Hamza</Link></a></li>
          
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar2;