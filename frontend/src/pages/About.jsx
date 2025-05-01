//Arda

import React from 'react';


function Contact(props) {
    return (
        <div id="about" >
            <div className="container" style={{width:"50%"}}>
                <div className="row">
                    <div className="about-col-1">
                        <img src="./src/image/ardabball.JPG" alt="image" />
                    </div>
                    <div className="about-col-1" style={{color:"white"}}>
                        <h1 className="sub-title" style={{ color: '#feba29' }}>À propos de Arda</h1>
                        <p style={{ marginTop: '20px' }}>
                            J'ai 18 ans et je suis étudiant au cégep de Marie-Victorin en technique d'informatique, je suis présentement à ma deuxième année dans mon
                            cheminement scolaire. Comme vous pouvez le voir sur l'image à la gauche, je joue aussi au basket-ball. Ça fait 5 ans que je joue et j'adore ça.
                            Je fais ce site dans le but de develloper mon niveau en informatique .
                        </p>
                        <a href="./src/image/cvArda.docx" download class="btn" style={{color:"#feba29"}}>Cliquez ici pour télécharger mon cv</a>
    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
