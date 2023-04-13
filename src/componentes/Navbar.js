import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <nav>
      <div className="navbar-top">
        <div className="navbar-top-left">
          <Link to="/">Personas</Link>
          <Link to="/">Corporativo</Link>
        </div>
        <div className="navbar-main arriba">
          <Link to="/">Paga tu cuenta</Link>
          <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Sucursales y Oficinas
            {showSubmenu && (
              <div className="navbar-submenu">
                <Link to="/">Agencia Ambato</Link>
                <Link to="/">Agencia Latacunga</Link>
                <Link to="/">Agencia Puyo</Link>
                <Link to="/">Agencia Riobamba</Link>
              </div>
            )}
          </Link>
          <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Mi Speedy
            {showSubmenu && (
              <div className="navbar-submenu">
                <Link to="/">Llamanos al</Link>
                <Link to="/">Escribenos al</Link>
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <a href='./#'><img src="/img/Navbar/Logo.png" alt="Logo" /></a>
        </div>
        <div className="navbar-main">
          <Link to="/">Inicio</Link>
          <Link to="/">Nosotros</Link>
          <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Planes Internet
            {showSubmenu && (
              <div className="navbar-submenu">
                <Link to="/">Planes Home</Link>
                <Link to="/">Planes Corporativos</Link>
                <Link to="/">Subpalabra 9</Link>
              </div>
            )}
          </Link>
          <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Speedy TV
            {showSubmenu && (
              <div className="navbar-submenu">
                <Link to="/">Cobertura</Link>
                <Link to="/">Condiciones de Uso</Link>
                <Link to="/">Preguntas Frecuentes</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Test de Velocidad</Link>
              </div>
            )}
          </Link>
          <Link to="/">Contáctanos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
