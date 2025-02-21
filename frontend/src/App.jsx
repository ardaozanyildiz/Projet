import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar2 from "./header/Navbar2";
import Footer from "./header/Footer";
import HomePages from "./pages/HomePages";
import SearchArtist from "./pages/SearchArtist";
import Jeux from "./pages/Jeux";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutArda from "./pages/AboutArda";
import AboutHamza from "./pages/AboutHamza";
import TutoJeux from "./pages/TutoJeux"




function App() {
  return (
    <BrowserRouter>
      <Navbar2/>
      <div>
        <Routes>
            <Route path='/' element={<HomePages/>} />
            <Route path='/SearchArtist' element={<SearchArtist/>} />
            <Route path='/Jeux' element={<Jeux/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/TutoJeux' element={<TutoJeux/>} />
            <Route path='/AboutArda' element={<AboutArda/>} />
            <Route path='/AboutHamza' element={<AboutHamza/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
     
  );
}

export default App;
