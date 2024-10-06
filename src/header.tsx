import React from 'react';
import headerlogo from './assets/qantas-logo.png';
export const Header = () =>  {
  return(
  <div>
     <img src={headerlogo} alt ="logo" className='w-24' />
  </div>);
}
