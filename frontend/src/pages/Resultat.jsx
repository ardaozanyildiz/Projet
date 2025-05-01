import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ResultatQuiz.css';

function Resultat() {
    const [Questions, setQuestions] = useState([]);

    const loadAllQuestions = async () => {
        const result = await axios.get('http://localhost:8888/questions/arda/francais');
        setQuestions(result.data);
    };

    useEffect(() =>{
        loadAllQuestions()
    }, []);

    return (
        <div className='resultat-card'>
            <table>
                <thead>
                    <tr>
                        <th>La Question</th>
                        <th>La Bonne Réponse</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Questions.map((data) => (
                            <tr key={data.i}>
                                    <td>{data.questionTxt}</td>
                                    <td>{data.bonneReponse}</td>
                            </tr>
                        
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
}

export default Resultat;