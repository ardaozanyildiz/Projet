import React from 'react';
import './HomePages.css';
import {Link} from 'react-router-dom';


function HomePages(props) {
    return (
        <div class="centre">
            <div class="message-container">
                <h1>Profitez de nos 3 petits Quiz</h1>
            </div>

            <div class="card-container">
                <div className="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Math.png')", backgroundSize:"cover"}}>
                    <div class="card-details">
                        <p class="text-title">Quiz de Math</p>
                        <p class="text-body">- 10 questions <br /> - 10 secondes par questions</p>
                    </div>
                    <Link to="/QuizMath"><button class="card-button" style={{background:"#5dc75f"}}><a>Jouer</a></button></Link>
                </div>

                <div class="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Francais.png')", backgroundSize:"cover"}}>
                <div class="card-details">
                        <p class="text-title">Quiz Francais</p>
                        <p class="text-body">- 10 questions <br /> - 10 secondes par questions</p>
                    </div>
                    <Link to="/QuizFr"><button class="card-button" style={{background:"#dbba76"}}><a>Jouer</a></button></Link>
                </div>

                <div class="card" style={{ borderRadius: "20px", backgroundImage: "url('./src/image/Capitale.png')", backgroundSize:"cover"}}>
                    <div class="card-details">
                        <p class="text-title">Quiz Capital</p>
                        <p class="text-body">- 10 questions <br /> - regarder l'image est deviner la capital <br /> - 10 secondes par questions</p>
                    </div>
                    <Link to="/PageIntroduction"><button class="card-button" style={{background:"#e67d2e"}}><a>Jouer</a></button></Link>
                </div>

                
            
                    
            </div>
        </div>
       
   
    );
}

export default HomePages;





