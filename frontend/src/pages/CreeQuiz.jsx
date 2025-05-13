import React, { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';






const CreeQuiz = () => {
  const { user } = useContext(UserContext);
  const [nomQuizz, setNomQuizz] = useState('');
  const [nombreQuestions, setNombreQuestions] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizFini, setQuizFini] = useState(false);


  const handleStart = () => {
    const trimmedNomQuizz = nomQuizz.trim();
    const nb = Number(nombreQuestions);

    if (!trimmedNomQuizz || isNaN(nb) || nb <= 0) {
      alert('Veuillez entrer un nom de quiz valide et un nombre de questions supérieur à 0.');
      return;
    }

    const initialQuestions = Array.from({ length: nb }, () => ({
      questionTxt: '',
      choix1: '',
      choix2: '',
      choix3: '',
      bonneReponse: '',
      category: trimmedNomQuizz,
    }));

    setQuestions(initialQuestions);
    setCurrentStep(1); 
  };

  const handleChange = (champ, valeur) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentStep - 1][champ] = valeur;
    setQuestions(updatedQuestions);
  };

const handleNext = () => {
  const current = questions[currentStep - 1];
  const choix = [current.choix1, current.choix2, current.choix3, current.bonneReponse];
  const valeursUniques = new Set(choix.map(c => c.trim().toLowerCase()));

  if (valeursUniques.size !== choix.length) {
    alert("Tous les choix doivent être différents.");
    return;
  }

  if (currentStep < questions.length) {
    setCurrentStep(currentStep + 1);
  } else {
    alert("Toutes les questions ont été saisies !");
    setQuizFini(true);
    console.log(questions); 
  }
};

const handleSubmit = async () => {
  try {
    const requete = {
      email: user.email,
      questions: questions,
    };

    const response = await axios.post('http://localhost:8888/questions/createQuizz', requete);

    if (response.data.includes("existe")) {
      alert("Vous avez déjà créé un quiz avec ce nom.");
    } else {
      alert("Quiz créé avec succès !");
    }
  } catch (error) {
    console.error('Erreur lors de la création du quiz :', error);
    alert('Une erreur est survenue lors de la création du quiz.');
  }
};


  return (
    <div className="container">
      {currentStep === 0 ? (
        <div>
          <h2>Créer un Quiz</h2>
          <input
            type="text"
            placeholder="Nom du Quiz"
            value={nomQuizz}
            onChange={(e) => setNomQuizz(e.target.value)}
          />
          <input
            type="number"
            placeholder="Nombre de Questions"
            value={nombreQuestions}
            onChange={(e) => setNombreQuestions(e.target.value)}
          />
          <button onClick={handleStart}>Commencer</button>
        </div>
      ) : (
        <div>
        <h2>Question {currentStep}</h2>
        <input
          type="text"
          placeholder="Énoncé de la question"
          value={questions[currentStep - 1].questionTxt}
          onChange={(e) => handleChange('questionTxt', e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 1"
          value={questions[currentStep - 1].choix1}
          onChange={(e) => handleChange('choix1', e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 2"
          value={questions[currentStep - 1].choix2}
          onChange={(e) => handleChange('choix2', e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 3"
          value={questions[currentStep - 1].choix3}
          onChange={(e) => handleChange('choix3', e.target.value)}
        />
        <input
          type="text"
          placeholder="Bonne réponse"
          value={questions[currentStep - 1].bonneReponse}
          onChange={(e) => handleChange('bonneReponse', e.target.value)}
        />
        <button onClick={handleNext}>Question suivante</button>

        {quizFini && (
            <div style={{ marginTop: '20px' }}>
              <h3>Votre quiz est prêt !</h3>
              <button onClick={handleSubmit}>Valider le quiz</button>
            </div>
          )}

      </div>
    )}
  </div>
    );
}

export default CreeQuiz;
