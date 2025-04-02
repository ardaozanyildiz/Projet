import React from 'react';
import './QuizMath.css';
function QuizMath(props) {
    // Fonction pour jouer l'audio
    const playAudio = () => {
        const audio = document.getElementById('audioPlayer'); // Récupère l'élément audio
        audio.play(); // Joue l'audio
    };

    return (
        <div className='container'>
            <h1>Quiz de Math</h1>
            <hr />
            <h2>2+2</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


            <h2>5+7</h2>
            <h2>89-27</h2>
            <h2>/h2>
            <h2>2+2</h2>
            <h2>2+2</h2>
            <h2>2+2</h2>
            <h2>2+2</h2>
            <h2>2+2</h2>
            <h2>2+2</h2>
       
            

            

            
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