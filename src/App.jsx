import React from 'react';
import Hero from './components/Hero';
import BabysitterList from './components/BabysitterList';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">NannyCare</div>
          <div className="nav-links">
            <a href="#home">Inicio</a>
            <a href="#services">Servicios</a>
            <a href="#gallery">Galería</a>
            <a href="#about">Nosotros</a>
            <a href="#contact">Contacto</a>
            <button className="btn-nav">Iniciar Sesión</button>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <BabysitterList />
        <Gallery />
      </main>
      <footer className="footer">
        <div className="container">
          <div id="contact" className="contact-section">
            <p><strong>Contacto:</strong> <a href="mailto:contacto@nannycare.com">contacto@nannycare.com</a></p>
          </div>
          <p>&copy; 2025 NannyCare. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
