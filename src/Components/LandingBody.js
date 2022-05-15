import React from 'react';
<<<<<<< HEAD
const LandingBody = () => {
    return ( 
        <div>
            <div className=''>


            </div>


            <div>



            </div>



        </div>


=======
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
>>>>>>> 715c5f35201cb4db3c1a8fcb340b8864aa36f6ad
     );
}
 
export default LandingBody;