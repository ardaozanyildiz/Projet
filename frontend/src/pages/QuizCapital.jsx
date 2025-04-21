import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizCapital() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [tabQuestions, setQuestions] = useState([]);
  const [selectedAwnser, setSelectedAwnser] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const loadAllQuestions = async () => {
    try {
      console.log("1");
      const result = await axios.get("http://localhost:8888/questions/arda/capitale");
      setQuestions(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement des questions :", error);
    }
  };

  useEffect(() => {
    loadAllQuestions();
  }, []);

  const handleNext = () => {
    if (selectedAwnser === ""){
        setErrorMessage("veuillez selectionner reponse avant de continuer")
        return;
    }
    setErrorMessage("");
    setCurrentQuestionIndex(currentQuestionIndex +1);
    setSelectedAwnser("");

    
  };

  if(currentQuestionIndex >= tabQuestions.length){
    return(
        <div className='container'>
            <h2>quizz terminé !</h2>
            <p>Merci pour ta participation</p>
        </div>
    );
  }

  return (
    tabQuestions.length > 0 && (
      <div className='container'>
        <h4>Question {currentQuestionIndex + 1} / {tabQuestions.length}</h4>
        <p>{tabQuestions[currentQuestionIndex].questionTxt}</p>

        <div className='form-check'>
            <input
                className='form-check-input'
                type='radio'
                name='choix'
                value={tabQuestions[currentQuestionIndex].choix1}
                onChange={(e) => setSelectedAwnser(e.target.value)}
                />
                <label className='form-check-label'>
                    {tabQuestions[currentQuestionIndex].choix1}

                </label>
        </div>

        <div className='form-check'>
            <input 
            className='form-check-input'
            type='radio'
            name='choix'
            value={tabQuestions[currentQuestionIndex].choix2}
            onChange={(e) => setSelectedAwnser(e.target.value)}
            />

            <label className="form-check-label">
                {tabQuestions[currentQuestionIndex].choix2}

            </label> 
        </div>

        <div className='form-check'>
            <input
            className='form-check-input'
            type='radio'
            name='choix'
            value={tabQuestions[currentQuestionIndex].choix3}
            onChange={(e) => setSelectedAwnser(e.target.value)}
            
            />

            <label className="form-check-label">
            {tabQuestions[currentQuestionIndex].choix3}
            </label>

        </div>
        
        
        <div className='from-check'>
            <input
            className='from-check-input'
            type='radio'
            name='choix'
            value={tabQuestions[currentQuestionIndex].bonneReponse}
            onChange={(e) => setSelectedAwnser(e.target.value)}
            />
            <label className='form-check-label'>
                {tabQuestions[currentQuestionIndex].bonneReponse}
            </label>
        </div>

        {errorMessage && (
            <div className='alert alert-danger mt-3' role='alert'>
                {errorMessage}
            </div>
        )}

            <button
            className='btn btn-primary mt-3'
            onClick={handleNext}
            
            >
                Suivant

            </button>
        



      </div>
    )
  );
}

export default QuizCapital;
