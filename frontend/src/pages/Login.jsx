import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import  {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Login(props) {
    const[client, setClient] = useState({
        email:"",
        mdp:""
    });

    const setAttribut = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})

    }

    const navigate = useNavigate();

    const submitClient = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8888/clients/createClient", client)
            .then(() =>{
                navigate("/")
            }).catch((error) =>{
            console.log(error);
        });

    }
    return (
        <form class="form" onSubmit={(e) => submitClient(e)} method="post">
            <p class="title">Inscription</p>
            <p class="message">Inscris toi maintenant</p>
                    
            <label>
                <input type="text"  class="input" name="email" id="email" placeholder="" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribut(e)} value={client.email}/>
                <span>Email</span>
            </label> 
                
            <label>
                <input type="text"  class="input" name="mdp" id="mdp" placeholder="" required onChange={(e) => setAttribut(e)} value={client.mdp}/>
                <span>Mots de passe</span>
            </label>
            <button type="submit" class="submit">Submit</button>
            <p class="signin">Si tu as déjà un compte? <a><Link to="/Signin">Connecte toi</Link></a></p>
        </form>
    );
}

export default Login;
