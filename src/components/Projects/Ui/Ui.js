import React from 'react'
import project1 from '../project1.jpg'
import project2 from '../project2.jpg'
import project4 from '../project4.jpg'
import project5 from '../project5.jpg'

const Ui = () => {
  return (
    <div className='projects-main-container uictn'>
      <div className='projects-main-gallery uictn'>
        <div className='projects-main-top-gallery uictn'>
          <img src={project1}/>
          <img src={project2}/>
        </div>
        <div className='projects-main-bottom-gallery uictn'>
          <img className='cleoBanner uictn' src={project4} alt='cleo app banner'/>
        </div>
      </div>
      <img className='projects-glam-app uictn' src={project5} alt='Glam App Presentation'/>
    </div>
  )
}
 
export default Ui