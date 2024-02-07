import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import Asterisco from '../Separator/asterisco.png'

const ProjectsNavbar = () => {
  return (
    <div id='Projects'>
        <div className='projects-navbar-container'>
            <div className='projects-navbar-title'><Link to='/' className='projects-articleTitle'>Proyectos</Link><img id='asterisk' src={Asterisco}/></div>
            <div className='projects-navbar'>
                <NavLink className="nav-link" aria-current="page" to="/ux">UX</NavLink>
                <span>|</span>
                <NavLink className="nav-link" to="/ui">UI</NavLink>
                <span>|</span>
                <NavLink className="nav-link" to="/graphicdesign">Diseño Gráfico</NavLink>
                <span>|</span>
                <NavLink className="nav-link" to="/animations">Animaciones</NavLink>
            </div>
            <hr className='projects-navbar-separator'/>
            <Link to='/' className='contact-button'>Mi Behance</Link>
        </div>
    </div>
  )
}

export default ProjectsNavbar