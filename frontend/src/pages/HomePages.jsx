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
            <div className="card" style={{ borderRadius: "20px"}}>
                    <div class="card-details">
                        <p class="text-title">Quiz de Math</p>
                        <p class="text-body">- 10 questions <br /> - 10 secondes par questions</p>
                    </div>
                        <button class="card-button"><a><Link to="/QuizMath">Jouer</Link></a></button>
                </div>

                <div class="card" style={{ borderRadius: "20px",backgroundImage: "url('./src/image/fr.jpeg')", backgroundSize: "cover"}}>
                    <div class="card-details">
                        <p class="text-title">  </p>
                        <p class="text-body"></p>
                    </div>
                        <button class="card-button" style={{background:"#fa757a"}}><a><Link to="/QuizFr">Jouer</Link></a></button>
                </div>

                <div class="card" style={{borderRadius:"20px"}}>
                    <div class="card-details">
                        <p class="text-title">Quiz Capital</p>
                        <p class="text-body">- 10 questions <br /> - regarder l'image est deviner la capital <br /> - 10 secondes par questions</p>
                    </div>
                        <button class="card-button"><a><Link to="/QuizCapital">Jouer</Link></a></button>
                </div>

                
            
                    
            </div>
        </div>
       
   
    );
}

export default HomePages;





