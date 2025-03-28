import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login(props) {
    return (
        <form class="form">
            <p class="title">Inscription</p>
            <p class="message">Inscris toi maintenant</p>
                    
            <label>
                <input required placeholder="" type="text" class="input" />
                <span>Email</span>
            </label> 
                
            <label>
                <input required placeholder="" type="password" class="input" />
                <span>Mots de passe</span>
            </label>
            <button class="submit">Submit</button>
            <p class="signin">Si tu as déjà un compte? <a><Link to="/Signin">Connecte toi</Link></a></p>
        </form>
    );
}

export default Login;
