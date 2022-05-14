import React from 'react';
import Laptop from '../media/Laptop.svg';
import '../Stylesheet/LandingBody.css';
const LandingBody = () => {
    return ( 
        <div className='LPbodyDiv'>
           <div className='LPTextdiv'>
               <div className='LPHeading'>
                   <b><span>Your Toughts are<br/> Safe with Us</span></b>
               </div>
               <div className='LPdesc'>
                   <span>Two Lines Two Lines Two Lines Two<br/> Lines Two Lines</span>
               </div>
               <div className='LPSignupdiv'>
                   <div className='LPSignupWrapper'>
                       <span>Sign up for free</span>
                    </div>
               </div>
           </div>
           <div className='LPImagediv'>
               <img src={Laptop}/>
           </div>
        </div>
     );
}
 
export default LandingBody;