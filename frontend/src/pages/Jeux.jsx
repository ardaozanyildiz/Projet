import React from 'react';
import './jeux.css';
function Jeux(props) {
    return (
        <div>
            <h1>Le jeux va etre ici</h1>
            <div class="main">
        <div class="up">
        <button class="card1">Artiste 1</button>
        <button class="card2">Artiste 2</button>
        </div>
        <div class="down">
        <button class="card3">Artiste 3</button>
        <button class="card4">Artiste 4</button>
        </div>
        </div>
        </div>
    );
}

export default Jeux;