import React from 'react';
import './Contact.css';


function Contact(props) {
    return (
        <div id="about" >
            <div className="container">
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


                        <div className="tab-contents active-tab" id="skills">
                        <p style={{color:"#feba29", fontWeight:"bolder"}}>Personnalité</p>
                            <ul>
                                
                                <li>Autonome</li>
                                <li>Débrouillard</li>
                                <li>Attentif</li>
                            </ul>
                        </div>

                        <div className="tab-contents" id="experiences">
                        <p style={{color:"#feba29", fontWeight:"bolder"}}>Expériences</p>
                            <ul>
                                <p>Je suis encore dans les débuts de mon apprentissage <br /> donc je n'ai pas encore eu de grandes expériences <br /> en informatique, à part les études.</p>
                                <li><span>2023:</span><br />Walmart</li>
                                <li><span>2024:</span><br />Entraîneur camp de basket</li>
                                <li><p href="./src/image/cvArda." download class="btn" style={{color:"#feba29"}}>Télécharger mon cv</p></li>
                            </ul>
                        </div>

                        <div className="tab-contents" id="educations">
                        <p style={{color:"#feba29", fontWeight:"bolder"}}>Étude</p>
                            <ul>
                                <li><span>2018 - 2023:</span><br />Diplôme d'études secondaires : Collège d'Anjou</li>
                                <li><span>2023 - En cours:</span><br />Diplôme d'études collégiales en technique informatique : Cégep Marie-Victorin</li>
                                <li><span>Au futur:</span><br />Université</li>
                            </ul>
                        </div>

                        <div class="contact">
                            <h1 class="sub-title">Contacte moi</h1>
                            <p>ardaozanyildiz@gmail.com</p>
                            <p>514-582-3651</p>
                            
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
