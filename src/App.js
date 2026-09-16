import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Contacto from './pages/contacto';
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import NoEncontrada from './pages/noEncontrada'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element={<NoEncontrada/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
