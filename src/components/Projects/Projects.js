import React from 'react'
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project3 from './project3.jpg';
import project4 from './project4.jpg';
import project5 from './project5.jpg';
import star from '../AboutMe/star.png';

const Projects = () => {
  return (
    <div className='projects-main-container'>
      <div className='projects-main-gallery'>
        <div className='projects-main-top-gallery'>
          <img src={project1}/>
          <img src={project2}/>
          <img src={project3}/>
        </div>
        <div className='projects-main-bottom-gallery'>
          <img className='cleoBanner' src={project4} alt='cleo app banner'/>
          <span className='cleoBannerDescription'>
            <div className='cleoBannerDescription-one'><span>y</span><img className='littlestar' src={star}/></div>
            <div className='cleoBannerDescription-two'><span>muchos</span></div>
            <div className='cleoBannerDescription-three'><img className='littlestar' src={star}/><span>más</span></div>
          </span>
        </div>
      </div>
      <img className='projects-glam-app' src={project5} alt='Glam App Presentation'/>
    </div>
  )
}

export default Projects