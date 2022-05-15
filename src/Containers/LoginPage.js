import React from 'react';
import Logo from '../media/Logo.svg';
const LoginPage = () => {
    return ( <div className='LOPBox'>
        <div className='LOPLogo'>
            <img src={Logo}/>
            <span>InfoLock</span>
        </div>
        <div className='LOPinfo'>
            <div className='LOPhead'>
                <span>Login</span>
            </div>
            <div className='LOPcredbox'>
                
            </div>
        </div>
    </div> );
}
 
export default LoginPage;