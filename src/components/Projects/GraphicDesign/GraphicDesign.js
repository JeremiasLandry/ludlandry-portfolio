import React from 'react'
import project1 from '../project1.jpg'
import project2 from '../project5.jpg'

const GraphicDesign = () => {
  return (
    <div className='projects-main-container grDesign'>
      <img src={project1} className='grDesignImg'/>
      <img src={project2} className='grDesignImg'/>
    </div>
  )
}

export default GraphicDesign