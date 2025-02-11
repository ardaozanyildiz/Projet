import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'


function NavbarLinkTest(props) {
    return (
      <nav class="navbar navbar-expand-lg ">
        <div class="container">

            <a class="navbar-brand" id='na'>Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
              <a className="nav-link"><Link to="/pages/SearchArtist">Artiste</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/pages/Jeux">Jeux</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/pages/Contact">Contact</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavbarLinkTest;