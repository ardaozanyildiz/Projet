//Arda

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ResultatQuiz.css';
import { Link } from 'react-router-dom';

function GestionQuiz() {
    const [Questions, setQuestions] = useState([]);


    const loadAllQuestions = async () => {
        try {
            const result = await axios.get(`http://localhost:8888/questions/arda/utilisateur`);
            
            setQuestions(result.data);
        } catch (error) {
            console.error("Erreur lors du chargement des questions :", error);
        }
    };

    useEffect(() => {
        loadAllQuestions();
    }, []);


        const supprimerQuestion = async (id) => {
            try {
                await axios.delete(`http://localhost:8888/questions/deleteQuestion/${id}`);
                await loadAllQuestions(); 
            } catch (error) {
                console.error("Erreur :", error);
            }
        };

    return (
        <div className='resultat-card'>
            <h2>Mes Questions</h2>
            <table>
                <thead>
                    <tr>
                        <th>La Question</th>
                        <th>La Bonne Réponse</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Questions.map((data) => (
                        <tr key={data.questionId}>
                            <td>{data.questionTxt}</td>
                            <td>{data.bonneReponse}</td>
                            <td>
                                <button style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                                    onClick={() => supprimerQuestion(data.questionId)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
            </tbody>

            </table>
            <Link to="/"><button className="bouton" style={{ background: "blue", color: "white", marginLeft: "40%" }}>Retourner à l'accueil</button></Link>
        </div>
    );
}

export default GestionQuiz;
