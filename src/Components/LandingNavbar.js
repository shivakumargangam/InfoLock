import React from 'react';
import Logo from '../media/logo.svg';

const LandingNavbar = () =>{
    return(
        <div className='LpNavMain'>
            <img>src={Logo}</img>
            <div    className='LpLinkDiv'>
            <a to="/" className='LPlink'>HOME</a>
            <a to="/" className='LPlink'>HOME</a>
            <a to="/" className='LPlink'>HOME</a>

            </div>
            
    </div> );
}
 
export default LandingNavbar;
