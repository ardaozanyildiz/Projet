import React, { useState, useRef } from 'react';
import './QuizMath.css';
import axios from 'axios';
//import {data} from '../assets/data';
import {Link} from 'react-router-dom';
function QuizMath(props) {

    const[tabQuestions, SetQuestions] = useState([]);



    const loadQuestion = async () =>{
        const resultat = await axios.get("https://localhost:3306/api/questions");
        setQuestions(resultat.data);

    }

   




   
    let[index, setIndex] = useState(0);
    let[question,setQuestion] = useState(data[index]);
    let[lock, setLock] = useState(false);
    let[score, setScore] = useState(0);
    let[resultat, setResultat] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];


    
    const checkAnswer = (e, answer) => {
        if(lock === false){
            if (question.answer===answer){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1)
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.answer-1].current.classList.add("correct")
            }
        }
    }

    const next = ( ) => {
        if(lock===true){
            if(index=== data.length -1){
                setResultat(true);
                return 0;

            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })

        }
    }

    return (
        <div className='container' style={{width:"600px"}}>

        
            <h1>Quiz de Math</h1>
            <hr />
            {resultat?<></>:<><h2>{index+1}. {question.question}</h2>
            <ul>
                <li ref={Option1} onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={next}>Suivant</button>
            <div className='index'>{index+1} sur {data.length}</div></>}
            {resultat?<><h2>Votre resultat est de {score} sur {data.length}</h2>
            <Link to="/"><button style={{marginLeft:"7em"}}>Retouner au menu</button></Link></>:<></>}
            
            
        </div>
    )
}
export default QuizMath;

//<h2>5+7</h2>
//<h2>89-27</h2>
//<h2>28%4</h2>
//<h2>8x8</h2>
//<h2>456+56</h2>
//<h2>25-19</h2>
//<h2>45x3</h2>
//<h2>67+67</h2>
//<h2>99%3</h2>

// <figure>
//<figcaption>Listen to the T-Rex:</figcaption>
//<audio id="audioPlayer" src="./Vocal/Math/2+2.mp3"></audio>
//</figure>
//
//{/* Bouton pour jouer l'audio */}
//<button onClick={playAudio}>Jouer l'audio</button>