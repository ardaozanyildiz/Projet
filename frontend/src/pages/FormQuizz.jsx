import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";






 {/* template généré sans logique */}

const QuizForm = () => {

    const[lstQuestions, setLstQuestions] = useState([]);

    const loadAllQuestions = async () => {
        try {
          const result = await axios.get('http://localhost:8888/questions/createQuestions');
          setLstQuestions(result.data);
        } catch (error) {
          console.error("Erreur lors du chargement des questions :", error);
        }
      };

      useEffect(() => {
        loadAllQuestions();
      }, []);




  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Créer une question de quiz</h2>

      {/* Zone de dépôt de fichier audio */}
      <div
        style={{
          border: '2px dashed #aaa',
          padding: '30px',
          textAlign: 'center',
          borderRadius: '8px',
          marginBottom: '25px',
          backgroundColor: '#f9f9f9',
          cursor: 'pointer',
        }}
      >
        <p>Glisse un fichier audio ici ou clique pour en choisir un</p>
      </div>

      {/* Champ Question */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="question" style={{ fontWeight: 'bold' }}>Question :</label><br />
        <input
          type="text"
          id="question"
          placeholder="Entrez votre question ici"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {/* Champs Choix */}
      {[1, 2, 3, 4].map((num) => (
        <div key={num} style={{ marginBottom: '15px' }}>
          <label htmlFor={`choice${num}`} style={{ fontWeight: 'bold' }}>Choix {num} :</label><br />
          <input
            type="text"
            id={`choice${num}`}
            placeholder={`Réponse ${num}`}
            style={{
              width: '75%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '10px'
            }}
          />
          <label style={{ fontSize: '14px' }}>
            <input type="radio" name="correctAnswer" style={{ marginRight: '5px' }} />
            Bonne réponse
          </label>
        </div>
      ))}

      {/* Bouton soumettre */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Enregistrer la question
        </button>
      </div>
    </div>
  );
};

export default QuizForm;


