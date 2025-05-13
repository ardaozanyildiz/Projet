//Arda
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ResultatQuiz.css';
import {Link} from 'react-router-dom'


function Resultat() {
    const { category } = useParams();
    const [Questions, setQuestions] = useState([]);

    const loadAllQuestions = async () => {
        const result = await axios.get(`http://10.10.2.125:8888/questions/getByCategory/${category}`);

        setQuestions(result.data);
    };

    useEffect(() =>{
        loadAllQuestions()
    }, [category]);

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
            <Link to="/"><button className="bouton" style={{background:"blue", color:"white", marginLeft:"40%"}}>Retouner à l'accueil</button></Link>
            
        </div>
    );
}

export default Resultat;