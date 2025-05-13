import React, { useState, useEffect, useContext } from 'react';
import '../style/Quizz.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function QuizzClient() {
  const { user } = useContext(UserContext);
  const { categorie } = useParams();

  const [tabQuestions, setTabQuestions] = useState([]);
  const [melangerReponse, setMelangerReponse] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const loadQuizQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/questions/getQuizzByClient/${user.email}/${categorie}`);
        setTabQuestions(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des questions :", error);
      }
    };

    loadQuizQuestions();
  }, [user.email, categorie]);

  useEffect(() => {
  melangerQuestion();
}, [tabQuestions, currentQuestionIndex]);




  const melangerQuestion = () => {
  if (tabQuestions.length > 0 && currentQuestionIndex < tabQuestions.length) {
    const question = tabQuestions[currentQuestionIndex];
    const melange = [question.choix1, question.choix2, question.choix3, question.bonneReponse]
      .sort(() => Math.random() - 0.5); 
    setMelangerReponse(melange);
  }
};


  const handleNext = () => {
    if (selectedAnswer === '') {
      setErrorMessage('Veuillez sélectionner une réponse.');
      return;
    }

    if (selectedAnswer === tabQuestions[currentQuestionIndex].bonneReponse) {
      setCounter(counter + 1);
    }

    setSelectedAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };


  if (currentQuestionIndex >= tabQuestions.length) {
    return (
      <div className='quiz'>
        <h2 style={{ textAlign: "center", marginTop: "10%" }}>Quiz terminé !</h2>
        <p style={{ textAlign: "center" }}>Merci pour ta participation</p>
        <p style={{ textAlign: "center" }}>Score final : {counter} / {tabQuestions.length}</p>
        <Link to={`/Resultat/${categorie}`}>
          <button className="bouton" style={{ background: "blue", color: "white", marginLeft: "44%" }}>
            Voir les résultats
          </button>
        </Link>
        <Link to="/" className="navbar-brand">
          <button className="bouton" style={{ background: "gray", color: "white", marginLeft: "44%", marginTop: "10px" }}>
            Retourner à l'accueil
          </button>
        </Link>
      </div>
    );
  }

  
  return (
    tabQuestions.length > 0 && (
      <div className='quiz'>
        <h1 style={{ textAlign: "center", marginTop: "10%" }}>Quiz : {categorie}</h1>
        <p style={{ textAlign: "center" }}>{tabQuestions[currentQuestionIndex].questionTxt}</p>

        <div className="custom-radio-group">
            {melangerReponse.map((choix, index) => (
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
          <button className="btn btn-primary" onClick={handleNext}>Suivant</button>
        </div>
      </div>
    )
  );
}

export default QuizzClient;
