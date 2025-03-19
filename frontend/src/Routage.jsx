import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePages from './pages/HomePages';
import SearchArtist from './pages/SearchArtist';
import Jeux from './pages/Jeux';
import Contact from './pages/Contact';

function Routage(props) {
    return (
        <BrowserRouter>
            <Routes>
                
            <Route path='/' element={<HomePages/>} />
            <Route path='/SearchArtist' element={<SearchArtist/>} />
            <Route path='/Jeux' element={<Jeux/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routage;