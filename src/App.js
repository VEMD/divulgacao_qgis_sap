import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import SobreQgis from './pages/SobreQgis';
import Documentacao from './pages/Documentacao';
import Downloads from './pages/Downloads';
import Sobre from './pages/Sobre';

import './global_styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='SobreQgis' element={<SobreQgis/>} />
        <Route path='Documentacao' element={<Documentacao/>} />
        <Route path='Downloads' element={<Downloads/>} />
        <Route path='Sobre' element={<Sobre/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
