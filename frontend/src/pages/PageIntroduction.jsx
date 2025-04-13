import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function PageIntroduction(props) {


    return (
        <div>
            <h1>Reglement-Option Audio ou ecrit avec un bouton</h1>
                
                    <Link to="/QuizCapital"><button><a>Jouer version Audio</a></button></Link>
                    <Link to="/QuizCapital"><button><a>Jouer version Ecrit</a></button></Link>

        </div>
    );
}

export default PageIntroduction;