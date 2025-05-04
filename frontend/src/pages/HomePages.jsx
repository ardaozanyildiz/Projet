//Arda

import React from 'react';
import '../style/Home.css';
import {Link} from 'react-router-dom';


function HomePages(props) {
    return (
        <div className="centre">
            <div className="message-container">
                <h1>Profitez de nos 3 petits Quiz</h1>
            </div>

            <div className="card-container">
                <div className="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Math.png')", backgroundSize:"cover"}}>
                    <div className="card-details">
                        <p className="text-title">Quiz de Math</p>
                    </div>
                    <Link to="/QuizMath"><button className="card-button" style={{background:"#5dc75f"}}><a>Jouer</a></button></Link>
                </div>

                <div className="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Francais.png')", backgroundSize:"cover"}}>
                <div className="card-details">
                        <p className="text-title">Quiz Francais</p>
                    </div>
                    <Link to="/QuizFr"><button className="card-button" style={{background:"#dbba76"}}><a>Jouer</a></button></Link>
                </div>

                <div className="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Capitale.png')", backgroundSize:"cover"}}>
                    <div className="card-details">
                        <p className="text-title">Quiz Capital</p>
                    </div>
                    <Link to="/PageIntroduction"><button className="card-button" style={{background:"#e67d2e"}}><a>Jouer</a></button></Link>
                </div>

                <div className="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/User.png')", backgroundSize:"cover"}}>
                    <div className="card-details">
                        <p className="text-title">Quiz Utilisateur</p>
                    </div>
                    <Link to="/QuizUtilisateur"><button className="card-button" style={{background:"#8bd7e8"}}><a>Jouer</a></button></Link>
                </div>
            </div>
        </div>
       
   
    );
}

export default HomePages;





