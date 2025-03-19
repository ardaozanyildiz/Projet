import React from 'react';

function QuizMath(props) {
    // Fonction pour jouer l'audio
    const playAudio = () => {
        const audio = document.getElementById('audioPlayer'); // Récupère l'élément audio
        audio.play(); // Joue l'audio
    };

    return (
        <div>
            <h1>Le quiz de math va être ici</h1>
            <figure>
                <figcaption>Listen to the T-Rex:</figcaption>
                <audio id="audioPlayer" src="./Vocal/Math/2+2.mp3"></audio>
            </figure>
            
            {/* Bouton pour jouer l'audio */}
            <button onClick={playAudio}>Jouer l'audio</button>
        </div>
    );
}

export default QuizMath;
