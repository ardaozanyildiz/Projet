import React from 'react';


function Signin(props) {
    return (
        <div className='tout'>
            <form class="form">
                <p class="title">Connexion</p>
                <p class="message">Connecte toi</p>
        
                <label>
                <input required placeholder="" type="text" class="input" />
                <span>Email</span>
            </label> 
                
                    
                <label>
                    <input required placeholder="" type="password" class="input" />
                    <span>Mots de passe</span>
                </label>
                <button class="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signin;
