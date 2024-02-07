import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const [pantalla, setPantalla] = useState('');

  const manejarCambioEnPantalla = (mediaQueryList) => {
    if (mediaQueryList[0].matches) {
      setPantalla('xl');
    } else if (mediaQueryList[1].matches) {
      setPantalla('lg');
    } else if (mediaQueryList[2].matches) {
      setPantalla('md');
    } else if (mediaQueryList[3].matches) {
      setPantalla('sm');
    } else if (mediaQueryList[4].matches) {
      setPantalla('xs');
    }
  };

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(min-width: 1280px)'),
      window.matchMedia('(max-width: 1279px)'),
      window.matchMedia('(max-width: 1050px)'),
      window.matchMedia('(max-width: 800px)'),
      window.matchMedia('(max-width: 400px)'),
    ];

    manejarCambioEnPantalla(mediaQueries.map(query => query));

    mediaQueries.forEach((mediaQuery, index) => {
      mediaQuery.addListener(() => {
        manejarCambioEnPantalla(mediaQueries.map(query => query));
      });
    });

    return () => {
      mediaQueries.forEach(mediaQuery => {
        mediaQuery.removeListener(() => {
          manejarCambioEnPantalla(mediaQueries.map(query => query));
        });
      });
    };
  }, []);

  

  return (
    <>
      {pantalla === 'xl' && (
        <nav>
          <ul>
            <div className='nombre'>
              <li>
                  <h1><strong>Ludmila Landry</strong></h1>
              </li>
            </div>
            <div>
              <hr/>
            </div>
            <div>
              <li>
                  <Link to="#AboutMe">Sobre mí</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Skills">Habilidades</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Projects">Proyectos</Link>
              </li>
            </div>
            <div>
              <hr className='contact-line'/>
            </div>
            <div className='navContact'>
              <li>
                <Link to="/contact" className='contact-button'>Contacto</Link>
              </li>
            </div> 
          </ul>
        </nav>
      )}
      {/* pantalla Large 800px */}
      {pantalla === 'lg' && (
         <nav className='nav-lg'>
          <ul>
            <div className='nombre'>
              <li>
                  <h1><strong>Ludmila Landry</strong></h1>
              </li>
            </div>
            <div>
              <hr/>
            </div>
            <div>
              <li>
                  <Link to="#AboutMe">Sobre mí</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Skills">Habilidades</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Projects">Proyectos</Link>
              </li>
            </div>
            <div>
              <hr className='contact-line'/>
            </div>
            <div className='navContact'>
              <li>
                <Link to="/contact" className='contact-button'>Contacto</Link>
              </li>
            </div> 
          </ul>
       </nav>
      )}
      {pantalla === 'md' && (
         <nav className='nav-md'>
          <ul>
            <div className='nombre'>
              <li>
                  <h1><strong>Ludmila Landry</strong></h1>
              </li>
            </div>
            <div>
              <hr/>
            </div>
            <div>
              <li>
                  <Link to="#AboutMe">Sobre mí</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Skills">Habilidades</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Projects">Proyectos</Link>
              </li>
            </div>
            <div>
              <hr className='contact-line'/>
            </div>
            <div className='navContact'>
              <li>
                <Link to="/contact" className='contact-button'>Contacto</Link>
              </li>
            </div> 
          </ul>
       </nav>
      )}
      {pantalla === 'sm' && (
         <nav className='nav-sm'>
          <ul>
            <div className='nombre'>
              <li>
                  <h1><strong>Ludmila Landry</strong></h1>
              </li>
            </div>
            <div>
              <hr/>
            </div>
            <div>
              <li>
                  <Link to="#AboutMe">Sobre mí</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Skills">Habilidades</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Projects">Proyectos</Link>
              </li>
            </div>
            <div>
              <hr className='contact-line'/>
            </div>
            <div className='navContact'>
              <li>
                <Link to="/contact" className='contact-button'>Contacto</Link>
              </li>
            </div> 
          </ul>
       </nav>
      )}
      {pantalla === 'xs' && (
         <nav className='nav-xs'>
          <ul>
            <div className='nombre'>
              <li>
                  <h1><strong>Ludmila Landry</strong></h1>
              </li>
            </div>
            <div>
              <hr/>
            </div>
            <div>
              <li>
                  <Link to="#AboutMe">Sobre mí</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Skills">Habilidades</Link>
              </li>
              <span>|</span>
              <li>
                  <Link to="#Projects">Proyectos</Link>
              </li>
            </div>
            <div>
              <hr className='contact-line'/>
            </div>
            <div className='navContact'>
              <li>
                <Link to="/contact" className='contact-button'>Contacto</Link>
              </li>
            </div> 
          </ul>
       </nav>
      )}


    </>
    
  )
}

export default NavBar;