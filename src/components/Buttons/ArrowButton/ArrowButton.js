import React from 'react';
import ArrowIcon from './arrow.png';
import { Link } from 'react-router-dom';

const ArrowButton = () => {
  return (
    <Link to='/' className='arrowButton'><img src={ArrowIcon} alt='Arrow Icon'/></Link>
  )
}

export default ArrowButton