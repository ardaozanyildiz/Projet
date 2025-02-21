import React from 'react';
import './HomePages.css';
import {Link} from 'react-router-dom';


function HomePages(props) {
    return (
        <div class="centre">
            <div class="message-container">
                <h1>Aventure toi dans le monde de la musique et profite en pour jouer a un petit jeu</h1>
            </div>
            <div class="card-container">
            
                <div class="card" style={{backgroundColor:"#e6e9ed", color:"#1b4965",}}>
                    <p class="heading" style={{fontSize:"20px"}}>Tuto Jeux</p>
                    <p>Si vous n'avez encore jamais jouer à notre petit jeux, il est très conseillé de regarder le tutoriel avant de commencer.</p>
                    <a><Link to="/TutoJeux">Cliquez ici</Link></a>
                </div>
            </div>
      </div>
   
    );
}

export default HomePages;





