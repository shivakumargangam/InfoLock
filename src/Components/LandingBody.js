import React from 'react';
import Laptop from '../media/Laptop.svg';
import '../Stylesheet/LandingBody.css';
import {Link} from 'react-router-dom';
const LandingBody = () => {
    return ( 
        <div className='LPbodyDiv'>
           <div className='LPTextdiv'>
               <div className='LPHeading'>
                   <b><span>Your Thoughts are<br/> Safe with Us</span></b>
               </div>
               <div className='LPdesc'>
                
                   <span><br/>Write Your own private infromation page! <br/> Access your information on our Website.<br/>  You can read & write entries of your life.<br/>Personal notes on your System!<br/> </span>
               </div>
               <div className='LPSignupdiv'>
               <Link to='/signup' className='Links'>
                   <div className='LPSignupWrapper'>
                       <span>Sign up for free</span>
                    </div>
                    </Link>
               </div>
           </div>
           <div className='LPImagediv'>
               <img src={Laptop}/>
           </div>
        </div>
     );
}
 
export default LandingBody;