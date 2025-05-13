//Hamza

import React, { useEffect, useState } from 'react';
import '../style/Quizz.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function QuizUtilisateur() {
  const { user } = useContext(UserContext);
  const [categories, setCategories] = useState([]);

const afficheQuizzs = async () => {
  try {
    const response = await axios.get(`http://localhost:8888/questions/getQuestionsByClient/${user.email}`);
    const data = response.data;

    const uniqueCategories = [...new Set(data.map(q => q.category))];
    setCategories(uniqueCategories);
  } catch (error) {
    console.error("Erreur lors du chargement des catégories :", error);
  }
};


useEffect(() => {
  afficheQuizzs();
}, [user.email]);

const handleDelete = async (categorie) => {
  try {
    await axios.delete(`http://localhost:8888/questions/supprimerQuizz/${user.email}/${categorie}`);
    setCategories(prev => prev.filter(cat => cat !== categorie));
    alert("Quiz supprimé avec succès !");
  } catch (error) {
    alert("Erreur lors de la suppression du quiz.");
    console.error(error);
  }
};



return (
  <div style={{ textAlign: 'center', marginTop: '5%' }}>
    <h2>Mes Quizz</h2>
    {categories.map((categorie, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <Link to={`/jouer/${categorie}`} style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              borderRadius: '10px',
              fontSize: '1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {categorie}
          </button>
        </Link>

        {/* ➕ Bouton Supprimer */}
        <button
          onClick={() => handleDelete(categorie)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Supprimer
        </button>
      </div>
    ))}
  </div>
);

}

export default QuizUtilisateur;
