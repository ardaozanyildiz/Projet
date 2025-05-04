import React from 'react';

import {Link} from 'react-router-dom';
import  {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";


function CreeQuiz(props) {
    const[question, setQuestion] = useState({
        questionTxt:"",
        choix1:"",
        choix2:"",
        choix3:"",
        bonneReponse:"",
        category: "utilisateur"
    });

    const setAttribut = (e) => {
        const value = e.target.value;
        setQuestion({...question, [e.target.name]: value})
    }

    const navigate = useNavigate();

    const submitQuestion = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8888/questions/createQuestion", question)
            .then(() =>{
                navigate("/")
            }).catch((error) =>{
            console.log(error);
        });

    }

    return (
        <div className='tout'>

        <form className="form" onSubmit={(e) => submitQuestion(e)} method="post">
            <p className="title">Cree ton quiz</p>
            <p className="message">Inscris toi maintenant</p>
                    
            <label>
                <input type="text"  className="input" name="questionTxt" id="questionTxt" placeholder="" required onChange={(e) => setAttribut(e)} value={question.question_txt}/>
                <span>Question</span>
            </label> 
                
            <label>
                <input type="text"  className="input" name="choix1" id="choix1" placeholder="" required onChange={(e) => setAttribut(e)} value={question.choix1}/>
                <span>Choix 1</span>
            </label>

            <label>
                <input type="text"  className="input" name="choix2" id="choix2" placeholder="" required onChange={(e) => setAttribut(e)} value={question.choix2}/>
                <span>Choix 2</span>
            </label>

            <label>
                <input type="text"  className="input" name="choix3" id="choix3" placeholder="" required onChange={(e) => setAttribut(e)} value={question.choix3}/>
                <span>Choix 3</span>
            </label>

            <label>
                <input type="text"  className="input" name="bonneReponse" id="bonneReponse" placeholder="" required onChange={(e) => setAttribut(e)} value={question.bonne_reponse}/>
                <span>Choix 4 qui sera la bonne réponse</span>
            </label>

            <button type="submit" className="submit">Submit</button>
        </form>
        </div>
    );
}

export default CreeQuiz;