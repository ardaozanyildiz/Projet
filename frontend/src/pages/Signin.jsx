import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Signin(props) {

    const[client, setClient] = useState({
        email:"",
        mdp:""
    })

    const { setUser } = useContext(UserContext);

    const setAttribut = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})
    }

    const navigate = useNavigate();

    const checkClient = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8888/clients/verifClient", client)
            .then((res) =>{
                if(res.data){
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setUser(res.data);
                    navigate("/Profil");
                } else {
                    alert("Email ou mot de passe incorrect");
                }

                
            }).catch((error) =>{
                console.log("erreur: ",error);
            });
    }

    return (
        <div className='tout'>
            <form class="form" onSubmit={(e) => checkClient(e)} method='post'>
                <p className="title">Connexion</p>
                <p className="message">Connecte toi</p>
        
                <label>
                <input required placeholder="" type="text" className="input" name="email" id="email" require pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setAttribut(e)} value={client.email} />
                <span>Email</span>
            </label> 
                
                    
                <label>
                    <input required placeholder="" type="password" className="input" name="mdp" require onChange={(e) => setAttribut(e)} value={client.mdp} />
                    <span>Mots de passe</span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">Si tu as pas de compte? <a><Link to="/Login">Inscris toi</Link></a></p>
            </form>
        </div>
    );
}

export default Signin;
