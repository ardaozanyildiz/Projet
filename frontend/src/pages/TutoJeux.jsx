import React from 'react';
import '../style/TutoJeux.css';
import {Link} from 'react-router-dom';


function TuToJeux(props) {
    return (
        <div>
            <div className='Instructions container'>
                <h1>Comment jouer</h1>
                <p>Lissez bien le tutoriel pour etre sur de bien comprendre toute les regles</p>
                <ul className='browser-default' id='main-list'>
                    <li>
                        Vous avez 10 minutes pour finir le quiz
                    </li>
                    <li>
                        Chaque Quiz contient 10 questiions
                    </li>
                    <li>
                        Chaque question contient 4 choix de reponses 
                        
                    </li>
                    <li>
                        Choisi la bonne reponse
                        
                    </li>
                    <li>
                        Dans chaque quiz vous pouvz utiliser des indices
                        <ul>
                            <li>5 indices normales</li>
                            <li>2 indices qui enleve 2 mauvaise reponse</li>
                        </ul>
                    </li>    
                    <li>
                        Clique sur cette icon ... pour avoir les indices normales
                        
                    </li>
                    <li>
                        Clique sur cette icon pour eliminer 2 mauvaises reponses
                        
                    </li>
                    <li>
                        Le chronometre vas commencer des que vous lancez la partie
                    </li>
                </ul>
                <div>
                    <span className='left'><Link to="/">Retour au menu</Link></span>
                    <span className='right'><Link to="/QuizMath">Jouer QuizMath</Link></span>
                    <span className='right'><Link to="/QuizFr">Jouer QuizFr</Link></span>
                    <span className='right'><Link to="/QuizCapital">Jouer QuizCapital</Link></span>
                </div>
            </div>
        </div>
    );
}

export default TuToJeux;