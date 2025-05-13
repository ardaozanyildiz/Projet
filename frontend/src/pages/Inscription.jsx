//Arda

import React from 'react';
import '../style/Forms.css';
import {Link} from 'react-router-dom';
import  {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login() {
    const[client, setClient] = useState({
        email:"",
        mdp:""
    });

    const[erreurInscription, setErreurInscription] = useState('')

    const setAttribut = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})

    }

    const navigate = useNavigate();

    const submitClient = (e) =>{
        e.preventDefault();
        axios.post("http://10.10.2.125:8888/clients/createClient", client)
            .then(() =>{
                navigate("/")
            }).catch((error) =>{
            console.log(error);
            setErreurInscription("erreur: email invalide")
        });

    }
    return (
        <div className='tout'>

        <form className="form" onSubmit={(e) => submitClient(e)} method="post">
            <p className="title">Inscription</p>
            {erreurInscription && (
                <div style = {{ color: 'red', textAlign: 'center', marginBottom: '10px'}}>
                    {erreurInscription}

                </div>
            )}
            <p className="message">Inscris toi maintenant</p>
                    
            <label>
                <input type="text"  className="input" name="email" id="email" placeholder="" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribut(e)} value={client.email}/>
                <span>Email</span>
            </label> 
                
            <label>
                <input type="text"  className="input" name="mdp" id="mdp" placeholder="" required onChange={(e) => setAttribut(e)} value={client.mdp}/>
                <span>Mots de passe</span>
            </label>
            <button type="submit" className="submit">Submit</button>
            <p className="signin">Si tu as déjà un compte?<Link to="/Signin">Connecte toi</Link></p>
        </form>
        </div>

    );
}

export default Login;
