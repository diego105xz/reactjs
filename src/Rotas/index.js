import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial'
import PaginaFrontEnd from '../paginas/PaginaFrontEnd';
import PaginaBackEnd from '../paginas/PaginaBackEnd';

const Rotas = () => (
    <Router>
        <Routes>
            <Route path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </Router>
);

export default Rotas;