import React from 'react';
import '../App.css';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Profil = () => {
    const { user } = useContext(UserContext);
  // Données statiques pour l'exemple
  const userData = user;
  return (
    <div className="container-fluid container-lg py-4">
      <div className="row g-4">
        {/* Colonne de gauche */}
        <div className="col-12 col-sm-6 col-lg-4">
          {/* En-tête du profil */}
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
                  fontWeight: 'bold',
                  '@media (min-width: 768px)': {
                    width: '100px',
                    height: '100px',
                    fontSize: '2.5rem'
                  }
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

        {/* Colonne du milieu */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="d-flex flex-column gap-4 h-100">
            {/* Meilleur score */}
            <div className="card" style={{ 
              borderRadius: '15px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}>
              <div className="card-body p-4">
                <h3 className="mb-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '600' }}>
                  Meilleur Score
                </h3>
                <div style={{ 
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
                  fontWeight: 'bold', 
                  color: '#007bff', 
                  textAlign: 'center' 
                }}>
                  {/*userData.meilleurScore*/} points
                </div>
              </div>
            </div>

            {/* Mes Quizz Créés */}
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
                  <button className="btn btn-primary btn-sm">
                    + Créer un quizz
                  </button>
                </div>
                <div className="list-group">
                  {/*userData.quizzCrees.map((quizz, index) => (
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
                      <span style={{ fontWeight: '500' }}>{quizz.nom}</span>
                      <i className="fas fa-chevron-right text-muted"></i>
                    </div>
                  ))*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="col-12 col-sm-12 col-lg-4">
          {/* Quizz complétés */}
          <div className="card h-100" style={{ 
            borderRadius: '15px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <div className="card-body p-4">
              <h3 className="mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '600' }}>
                Derniers Quizz Complétés
              </h3>
              <div className="list-group">
                {/*userData.quizzCompletes.map((quizz, index) => (
                  <div 
                    key={index} 
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                    style={{ 
                      border: 'none', 
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white', 
                      borderRadius: '8px', 
                      marginBottom: '8px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <span style={{ fontWeight: '500' }}>{quizz.nom}</span>
                    <span className="badge rounded-pill" style={{ 
                      backgroundColor: '#007bff', 
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                      padding: '8px 12px' 
                    }}>
                      {quizz.score} points
                    </span>
                  </div>
                ))*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil; 