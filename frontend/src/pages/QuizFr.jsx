import React from 'react';
import './QuizFr.css';
function QuizFr(props) {
    return (
        
        <div className='quiz'>
            <h1 style={{textAlign:"center", marginTop:"10%"}}>Audio bouton</h1>
            <p style={{textAlign:"center"}}>Question1</p>
            
            <div class="custom-radio-group">
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option1" />
                    <span class="custom-radio-checkmark"></span>
                    Option 1
                </label>
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option2" />
                    <span class="custom-radio-checkmark"></span>
                    Option 2
                </label>
                <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 3
                </label>
                    <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 4
                </label>
                
            </div>


           
        </div>
    );
}

export default QuizFr;