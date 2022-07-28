import React from 'react';
import '../Stylesheet/LandingNavbar.css';
import Logo from '../media/Logo.svg';
import { Link } from "react-router-dom";
const LandingNavbar = () => {
    return ( 
        <div className='LPNavMain'>
            <Link to ='/' className='Links'>
                <div className='LPNavlogo'>
                    <img src={Logo}/>
                    <span>INFOLOCK</span>
                </div>
            </Link>
            <div className='LPNavLinks'>
                <Link to='/About'><span>About</span></Link>
                <Link to='/' className='Links'><span>Overview</span></Link>
                <Link to='/FAQ' className='Links'><span>FAQ</span></Link>
            </div>
            <div className='LPNavSigndiv'>
                <Link to='/login' className='Links'><span>Login</span></Link>
                <div className='LPNavSignupBox'>
                    <Link to='/signup' className='Links'><span>Signup</span></Link>
                </div>
            </div>
        </div>
     );
}
 
export default LandingNavbar;
