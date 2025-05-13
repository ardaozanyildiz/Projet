//Hamza

import React, { useContext, useState, useEffect } from 'react';
import '../App.css';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profil() {
  const [lstQuestions, setLstQuestions] = useState([]);
  const { user } = useContext(UserContext);
  const userData = user;

  const loadAllQuestions = async () => {
    try {
      const result = await axios.get(`http://localhost:8888/questions/getQuestionsByClient/${user.email}`);
      setLstQuestions(result.data);
    } catch (error) {
      console.error("Erreur lors du chargement des questions :", error);
    }
  };

  useEffect(() => {
    loadAllQuestions();
  }, []);

  return (
    <div className="container-fluid container-lg py-4">
      <div className="row g-4">
        
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100" style={{
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <div className="card-body d-flex flex-column align-items-center p-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}
              >
                {userData.email.charAt(0)}
              </div>
              <div className="text-center">
                <h2 className="mb-1" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', fontWeight: '600' }}>
                  {userData.nom}
                </h2>
                <p className="text-muted mb-0">Membre depuis 2024</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card flex-grow-1" style={{
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '600', margin: 0 }}>
                  Mes Quizz Créés
                </h3>
                <Link to="/CreeQuiz">
                  <button className="btn btn-primary btn-sm">+ Créer un quizz</button>
                </Link>
              </div>
              <div className="list-group">
                {lstQuestions.map((quizz, index) => (
                  <div
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                    style={{
                      border: 'none',
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                      borderRadius: '8px',
                      marginBottom: '8px',
                      transition: 'background-color 0.2s',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontWeight: '500' }}>{quizz.category}</span>
                    <i className="fas fa-chevron-right text-muted"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Profil;
