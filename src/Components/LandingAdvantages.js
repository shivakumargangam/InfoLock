import React from 'react';
import '../Stylesheet/LandingAdvantages.css';
const LandingAdvantages = () => {
    return ( 
        <div className='LPAdvMain'>
            <div className='LPAdvBox'>
                <div className='LPAdvHead'>
                    <span>Secure</span>
                </div>
                <div className='LPAdvdesc'>
                    <span>Your Data is encrypted  twice to increase security</span>
                </div>
            </div>
            <div className='LPAdvBox'>
                <div className='LPAdvHead'>
                    <span>Password protected</span>
                </div>
                <div className='LPAdvdesc'>
                    <span>Protect your entries with password.</span>
                </div>
            </div>
            <div className='LPAdvBox'>
                <div className='LPAdvHead'>
                    <span>Easy to use  </span>
                </div>
                <div className='LPAdvdesc'>
                    <span>It's extremly easy to use!</span>
                </div>
            </div>
        </div>
     );
}
 
export default LandingAdvantages;