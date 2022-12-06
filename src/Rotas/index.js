import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial'
import PaginaFrontEnd from '../paginas/PaginaFrontEnd';
import PaginaBackEnd from '../paginas/PaginaBackEnd';

const Rotas = () => (
    <HashRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </HashRouter>
);

export default Rotas;