//Arda

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar2 from "./header/Navbar2";
import Footer from "./header/Footer";
import HomePages from "./pages/HomePages";
import Contact from "./pages/About";
import NotFound from "./pages/NotFound";
import TutoJeux from "./pages/TutoJeux";
import Login from "./pages/Inscription";
import Signin from "./pages/Signin";
import QuizMath from "./pages/QuizMath";
import QuizFr from "./pages/QuizFr";
import QuizCapital from "./pages/QuizCapital";
import QuizUtilisateur from "./pages/QuizUtilisateur";
import PageIntroduction from "./pages/PageIntroduction";
import Profil from "./pages/Profil";
import FormQuizz from "./pages/FormQuizz";
import CreeQuiz from "./pages/CreeQuiz";
import Resultat from "./pages/Resultat";
import { UserProvider } from "./context/UserContext";

function App() {  
  return (
    <BrowserRouter>
      <UserProvider>
      <Navbar2/>
      <div>
        <Routes>
            <Route path='/' element={<HomePages/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/TutoJeux' element={<TutoJeux/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signin' element={<Signin/>} />
            <Route path='/QuizMath' element={<QuizMath/>} />
            <Route path='/QuizFr' element={<QuizFr/>} />
            <Route path='/QuizCapital' element={<QuizCapital/>} />
            <Route path='/QuizUtilisateur' element={<QuizUtilisateur/>} />
            <Route path='/PageIntroduction' element={<PageIntroduction/>}/>
            <Route path='/Profil' element={<Profil/>} />
            <Route path='/FormQuizz' element={<FormQuizz/>} />
            <Route path='/CreeQuiz' element={<CreeQuiz/>} />
            <Route path='/Resultat/:category' element={<Resultat />} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
