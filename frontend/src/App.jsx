import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./header/Navbar";
import Footer from "./header/Footer";
import HomePages from "./pages/HomePages";
import SearchArtist from "./pages/SearchArtist";
import Jeux from "./pages/Jeux";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
            <Route path='/' element={<HomePages/>} />
            <Route path='/SearchArtist' element={<SearchArtist/>} />
            <Route path='/Jeux' element={<Jeux/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
     
  );
}

export default App;
