import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import menuIcon from './hamburger.png';

function scrollToSection(sectionId) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const MenuHamburguesa = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className='menu-ctn'>
      {/* Aquí va el icono que funcionará como el botón del menú */}
      <img src={menuIcon} alt="Icono Menú" className='hamburger-icon' onClick={toggleMenu} />

      {/* Aquí va el contenido del menú que se mostrará o ocultará */}
      {menuAbierto && (
        <div className="menu">
          {/* Contenido del menú */}
          <ul>
              <li className='responsive-link-nav'>
                <Link onClick={() => scrollToSection('AboutMe')}>Sobre mí</Link>
              </li>
      
              <li className='responsive-link-nav'>
                <Link onClick={() => scrollToSection('Skills')}>Habilidades</Link>
              </li>
            
              <li className='responsive-link-nav'>
                <Link onClick={() => scrollToSection('Projects')}>Proyectos</Link>
              </li>
              <li className='responsive-link-nav'>
                <Link  onClick={() => scrollToSection('Footer')}>Contacto</Link>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const [pantalla, setPantalla] = useState('');

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(max-width: 700px)'),
      window.matchMedia('(max-width: 800px)'),
      window.matchMedia('(max-width: 1050px)'),
      window.matchMedia('(max-width: 1279px)'),
      window.matchMedia('(min-width: 1280px)'),
    ];

    const manejarCambioEnPantalla = () => {
      const tamanios = ['xs', 'sm', 'md', 'lg', 'xl'];
      const indice = mediaQueries.findIndex(query => query.matches);
      setPantalla(tamanios[indice]);
    };

    mediaQueries.forEach(mediaQuery => {
      mediaQuery.addListener(manejarCambioEnPantalla);
    });

    // Llama a la función para manejar el estado inicial
    manejarCambioEnPantalla();

    // Limpia los event listeners al desmontar el componente
    return () => {
      mediaQueries.forEach(mediaQuery => {
        mediaQuery.removeListener(manejarCambioEnPantalla);
      });
    };
  }, []);

  const navClasses = {
    xs: 'nav-xs',
    sm: 'nav-sm',
    md: 'nav-md',
    lg: 'nav-lg',
    xl: '',
  };

  return (
    <nav className={navClasses[pantalla]}>
      <ul>
        <div className='nombre'>
          <li>
            <h1><strong>Ludmila Landry</strong></h1>
          </li>
        </div>
        <div>
          <hr />
        </div>
        {pantalla === 'xs' ? (
          <MenuHamburguesa />
        ) : (
          <div className='navLinksGroup'>
            <li>
              <Link to="#"  onClick={() => scrollToSection('AboutMe')}>Sobre mí</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="#"  onClick={() => scrollToSection('Skills')}>Habilidades</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="#"  onClick={() => scrollToSection('Projects')}>Proyectos</Link>
            </li>
            {pantalla === 'md' || pantalla === 'xs' || pantalla === 'sm' ? (
              <>
                <span>|</span>
                <li>
                  <Link to="#"  onClick={() => scrollToSection('Footer')}>Contacto</Link>
                </li>
              </>
            ) : ''}
          </div>
        )}
        {pantalla === 'md' || pantalla === 'xs' || pantalla === 'sm' ? '' : (
          <>
            <div>
              <hr className='contact-line' />
            </div>
            <div className='navContact'>
              <li>
                <Link to="#"  onClick={() => scrollToSection('Footer')} className='contact-button'>Contacto</Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
