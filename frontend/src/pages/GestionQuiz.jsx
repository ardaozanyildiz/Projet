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

    //--------------------------------------------------------------
    const validerModification = async (id, questionData) => {
        try {
            await axios.put(`http://localhost:8888/questions/modifierQuestion/${id}`, {
                questionTxt: questionData.questionTxt,
                choix1: questionData.choix1,
                choix2: questionData.choix2,
                choix3: questionData.choix3,
                bonneReponse: questionData.bonneReponse,
                category: questionData.category
            });
        } catch (error) {
            console.error("Erreur lors de la modification :", error);
        }
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...Questions];
        updated[index][field] = value;
        setQuestions(updated);
    };
    //----------------------------------------------------------------

    return (
        <div className='gestion-card'>
            <h2>Mes Questions</h2>
            <table>
            <thead>
                <tr>
                    <th>La Question</th>
                    <th>Choix 1</th>
                    <th>Choix 2</th>
                    <th>Choix 3</th>
                    <th>Bonne Réponse</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {Questions.map((data, index) => (
                    <tr key={data.questionId}>
                        <td>
                            <input
                                type="text"
                                value={data.questionTxt}
                                onChange={(e) => handleInputChange(index, "questionTxt", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={data.choix1}
                                onChange={(e) => handleInputChange(index, "choix1", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={data.choix2}
                                onChange={(e) => handleInputChange(index, "choix2", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={data.choix3}
                                onChange={(e) => handleInputChange(index, "choix3", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={data.bonneReponse}
                                onChange={(e) => handleInputChange(index, "bonneReponse", e.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={() => validerModification(data.questionId, data)} style={{ marginRight: '5px' }}>Modifier</button>
                            <button onClick={() => supprimerQuestion(data.questionId)} style={{ background: "red", color: "white" }}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <Link to="/">
                <button className="bouton" style={{ background: "blue", color: "white", marginLeft: "40%" }}>
                    Retourner à l'accueil
                </button>
            </Link>
        </div>
    );
}

export default GestionQuiz;
