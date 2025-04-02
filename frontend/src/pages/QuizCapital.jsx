import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation de FontAwesomeIcon
import { faQuestionCircle, faClock } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes

function QuizCapital(props) {
    return (
        <div>
            <h1>Le quiz de capital va être ici</h1>
            <title>Quiz Capital</title>
            <div className='questions'>
                <div className='lifeline-container'>

                    <p>
                        <span className='icon'>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </span>
                        2
                    </p>
                    <p>
                        <span className='icon2'>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </span>
                        5
                    </p>
                </div>
                <div>
                    <p>
                        <span>1 sur 15</span>
                        2:15
   
                        <span className='icon3'>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                    </p>
                </div>

                <h5>Google was founded in what year?</h5>
                <div className='options-containers'>
                    <p className='option'>1997</p>
                    <p className='option'>1995</p>
                </div>
                <div className='options-containers'>
                    <p className='option'>1996</p>
                    <p className='option'>1999</p>
                </div>
                <div className='button-container'>
                    <button>Précédent</button>
                    <button>Suivant</button>
                    <button>Quitter</button>
                </div>
            </div>
        </div> 
    );
}

export default QuizCapital;
