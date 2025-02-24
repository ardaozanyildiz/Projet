import React from 'react';
import './Signin.css';

function Signin(props) {
    return (
        <form class="form">
            <p class="title">Connexion</p>
            <p class="message">Connecte toi</p>
      
            <label>
                <input required placeholder="" type="email" class="input" />
                <span>Email</span>
            </label> 
                
            <label>
                <input required placeholder="" type="password" class="input" />
                <span>Mots de passe</span>
            </label>
            <button class="submit">Submit</button>
        </form>
    );
}

export default Signin;
