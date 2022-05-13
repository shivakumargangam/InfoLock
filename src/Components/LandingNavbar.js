import React from 'react';
import '../Stylesheet/LandingNavbar.css';
import Logo from '../media/Logo.svg';
const LandingNavbar = () => {
    return ( 
        <div className='LPNavMain'>
            <div className='LPNavlogo'>
                <img src={Logo}/>
                <span>INFOLOCK</span>
            </div>
            <div className='LPNavLinks'>
                <span>About</span>
                <span>Overview</span>
                <span>FAQ</span>
            </div>
            <div className='LPNavSigndiv'>
                <span>Login</span>
                <div className='LPNavSignupBox'>
                    <span>Signup</span>
                </div>
            </div>
        </div>
     );
}
 
export default LandingNavbar;