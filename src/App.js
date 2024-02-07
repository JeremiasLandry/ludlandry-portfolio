import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Ux from './components/Projects/Ux/Ux';
import Ui from './components/Projects/Ui/Ui';
import GraphicDesign from './components/Projects/GraphicDesign/GraphicDesign';
import Animations from './components/Projects/Animations/Animations';
import Home from './components/Home/Home';
import ProjectsNavbar from './components/ProjectsNavbar/ProjectsNavbar';
import Process from './components/Process/Process';
import AnimatedProjects from './components/Animations/Animations';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Skills/>
        <ProjectsNavbar/>
        <Routes>
          <Route path='/' element={<Projects/>}/>
          <Route path='/ux' element={<Ux/>}/>
          <Route path='/ui' element={<Ui/>}/>
          <Route path='/graphicdesign' element={<GraphicDesign/>}/>
          <Route path='/animations' element={<Animations/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <Process/>
        <AnimatedProjects/>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
