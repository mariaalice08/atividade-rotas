import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './assets/componentes/Menu/Menu';
import Banner from './assets/componentes/Banner/Banner';
import Rodape from './assets/componentes/Rodape/Rodape';
 
import Home from './paginas/Home/Home';
import SalaDeRotacao from './paginas/SalaDeRotacao/SalaDeRotacao';
import Contato from './paginas/Contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/sala-de-rotacao' element={<SalaDeRotacao />} />

        <Route path='/contato' element={<Contato />} />
        
        <Route path='*' element={<h1> Página Não Encontrada</h1>} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;