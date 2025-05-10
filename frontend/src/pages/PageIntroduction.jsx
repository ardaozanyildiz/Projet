//Arda

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function PageIntroduction(props) {


    return (
        <div>
            <h1>Reglement-Option Audio ou ecrit avec un bouton</h1>
                
                    <Link to="/QuizCapital"><button>Jouer version Audio</button></Link>
                    <Link to="/QuizCapital"><button>Jouer version Ecrit</button></Link>

        </div>
    );
}

export default PageIntroduction;