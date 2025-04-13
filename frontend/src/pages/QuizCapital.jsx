import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizCapital(props) {

    const [tabQuestions, setQuestions] = useState([]);

    const loadAllQuestions = async () => 
        {
            console.log("1")
            const result = await axios.get("http://localhost:8888/questions/math");
            setQuestions(result.data)
        };

        useEffect(() => {
            loadAllQuestions();
        }, []);



    return (
        <div className='container'>
            <div className='affichage'>
       
                <tr>
                    <th>Category/</th>
                    <th>Choix1/</th>
                    <th>Choix2/</th>
                    <th>Choix3/</th>
                    <th>BonneReponse/</th>
                    <th>Questions</th>
                </tr>
                <tbody>
                    {
                        tabQuestions.map((data)=> (
                            <tr key={data.QuizCapital}>
                                <td>{data.category}</td>
                                <td>{data.choix1}</td>
                                <td>{data.choix2}</td>
                                <td>{data.choix3}</td>
                                <td>{data.bonneReponse}</td>
                                <td>{data.question_txt}</td>

                            </tr>
                            
                        ))
                    }
                </tbody>
          
          

            </div>

        </div>
        //<div className='quiz'>
        //    <h1 style={{textAlign:"center", marginTop:"10%"}}>Audio bouton</h1>
        //    <p style={{textAlign:"center"}}>Question1</p>
        //    
        //    <div class="custom-radio-group">
        //        <label class="custom-radio-container">
        //            <input type="radio" name="custom-radio" value="option1" />
        //            <span class="custom-radio-checkmark"></span>
        //            Option 1
        //        </label>
        //        <label class="custom-radio-container">
        //            <input type="radio" name="custom-radio" value="option2" />
        //            <span class="custom-radio-checkmark"></span>
        //            Option 2
        //        </label>
        //        <label class="custom-radio-container">
        //            <input type="radio" name="custom-radio" value="option3" />
        //            <span class="custom-radio-checkmark"></span>
        //            Option 3
        //        </label>
        //            <label class="custom-radio-container">
        //            <input type="radio" name="custom-radio" value="option3" />
        //            <span class="custom-radio-checkmark"></span>
        //            Option 4
        //        </label>
        //        
        //    </div>
//
//
        // 
        //</div>

 
    );
}

export default QuizCapital;


       