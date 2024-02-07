import React from 'react'
import Asterisco from './asterisco.png'

const Separator = ({title, pilltext, inicioPill = true}) => {
  return (
    <>
        <div className='about-me-separator-container'>
            <span className='articleTitle'>{title}</span><img id='asterisk' src={Asterisco}/>
            <hr className='about-me-separator withAsterisk'/>
            <span className={`yellow-pill ${inicioPill ? 'inicio-pill' : 'randompill'}`}>{pilltext}</span>
        </div>
    </>
  )
}

export default Separator