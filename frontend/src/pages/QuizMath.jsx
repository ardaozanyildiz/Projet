import React from 'react';
import './QuizMath.css';
function QuizMath(props) {
    // Fonction pour jouer l'audio
    const playAudio = () => {
        const audio = document.getElementById('audioPlayer'); // Récupère l'élément audio
        audio.play(); // Joue l'audio
    };

    return (
        <div className='quiz'>
            <h1 style={{textAlign:"center", marginTop:"10%"}}>Audio bouton</h1>
            <p style={{textAlign:"center"}}>Question1</p>
            
            <div class="custom-radio-group">
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option1" />
                    <span class="custom-radio-checkmark"></span>
                    Option 1
                </label>
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option2" />
                    <span class="custom-radio-checkmark"></span>
                    Option 2
                </label>
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 3
                </label>
                    <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 4
                </label>
                
            </div>


           
        </div>
    );
}

export default QuizMath;


// <figure>
//<figcaption>Listen to the T-Rex:</figcaption>
//<audio id="audioPlayer" src="./Vocal/Math/2+2.mp3"></audio>
//</figure>
//
//{/* Bouton pour jouer l'audio */}
//<button onClick={playAudio}>Jouer l'audio</button>