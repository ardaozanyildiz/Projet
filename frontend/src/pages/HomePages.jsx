import React from 'react';
import './HomePages.css';

function HomePages(props) {
    return (
        <div>
            <div class="message-container">
                <h1>Aventure toi dans le monde de la musique et profite en pour jouer a un petit jeu</h1>
            </div>
            <div class="card-container">
        
        
                <div class="card">
                    <p class="heading">Tuto Recherche</p>
                    <p>Si vous avez besoin de voir un court tutoriel sur comment rechercher des informations sur des artistes.</p>
                    <p>Cliquez ici</p>
                </div>
            
                <div class="card">
                    <p class="heading">Tuto Jeux</p>
                    <p>Si vous n'avez encore jamais jouer à notre petit jeux, il est très conseillé de regarder le tutoriel avant de commencer.</p>
                    <p>Cliquez ici</p>
                </div>
            </div>
      </div>
   
    );
}

export default HomePages;





