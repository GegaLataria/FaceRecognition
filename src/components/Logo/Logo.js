import React from 'react';
import brain from './brain.jpg';
import './Logo.css'

const Logo = () => {
    return(
        <div className='ma4 mt0 logoImage'>
           <img className='grow' style = {{paddingTop: '5px'}} alt = 'brain-logo' src = {brain}/>
        </div>
    );
}

export default Logo;