import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuizMath.css';

function QuizMath() {
  const [tabQuestions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllQuestions = async () => {
    try {
      const result = await axios.get('http://localhost:8888/questions/arda/math');
      setQuestions(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement des questions :", error);
    }
  };

  useEffect(() => {
    loadAllQuestions();
  }, []);

  const handleNext = () => {
    if (selectedAnswer === '') {
      setErrorMessage("⚠️ Veuillez sélectionner une réponse avant de continuer.");
      return;
    }
    setErrorMessage('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer('');
  };

  if (currentQuestionIndex >= tabQuestions.length) {
    return (
      <div className='quiz'>
        <h2 style={{ textAlign: "center", marginTop: "10%" }}>Quiz terminé !</h2>
        <p style={{ textAlign: "center" }}>Merci pour ta participation</p>
      </div>
    );
  }

  return (
    tabQuestions.length > 0 && (
      <div className='quiz'>
        <h1 style={{ textAlign: "center", marginTop: "10%" }}>Mathématiques</h1>
        <p style={{ textAlign: "center" }}>{tabQuestions[currentQuestionIndex].questionTxt}</p>

        <div className="custom-radio-group">
          {[tabQuestions[currentQuestionIndex].choix1,
            tabQuestions[currentQuestionIndex].choix2,
            tabQuestions[currentQuestionIndex].choix3,
            tabQuestions[currentQuestionIndex].bonneReponse].map((choix, index) => (
            <label className="custom-radio-container" key={index}>
              <input
                type="radio"
                name="custom-radio"
                value={choix}
                checked={selectedAnswer === choix}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
              <span className="custom-radio-checkmark"></span>
              {choix}
            </label>
          ))}
        </div>

        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert" style={{ textAlign: "center" }}>
            {errorMessage}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn btn-primary" onClick={handleNext}>
            Suivant
          </button>
        </div>
      </div>
    )
  );
}

export default QuizMath;
