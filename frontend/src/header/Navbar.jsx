import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg ">
        <div class="container" style={{cursor: "pointer"}} >
          <Link to="/"><img src="./src/image/Melodify3.png" alt="" id='logo'/></Link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
              <a className="nav-link"><Link to="/SearchArtist">Recherche</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/Jeux">Jeux</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/Contact">Contact</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;