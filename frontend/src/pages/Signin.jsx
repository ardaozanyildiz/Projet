import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signin(props) {

    const[client, setClient] = useState({
        email:"",
        mdp:""
    })

    const setAttribut = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})
    }

    const navigate = useNavigate();

    const checkClient = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8888/clients/verifClient", client)
            .then(() =>{
                navigate("/")
            }).catch((error) =>{
                console.log(error);
            });
    }

    return (
        <div className='tout'>
            <form class="form" onSubmit={(e) => checkClient(e)} method='post'>
                <p class="title">Connexion</p>
                <p class="message">Connecte toi</p>
        
                <label>
                <input required placeholder="" type="text" class="input" name="email" id="email" require pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribut(e)} value={client.email} />
                <span>Email</span>
            </label> 
                
                    
                <label>
                    <input required placeholder="" type="password" class="input" name="mdp" require onChange={(e) => setAttribut(e)} value={client.mdp} />
                    <span>Mots de passe</span>
                </label>
                <button class="submit">Submit</button>
                <p class="signin">Si tu as pas de compte? <a><Link to="/Login">Inscris toi</Link></a></p>
            </form>
        </div>
    );
}

export default Signin;
