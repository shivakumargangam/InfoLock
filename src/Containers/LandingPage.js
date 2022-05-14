import React from 'react';
import LandingNavbar from '../Components/LandingNavbar.js';
import LandingBody from '../Components/LandingBody.js';
import LandingAdvantages from '../Components/LandingAdvantages.js';
import Footer from '../Components/footer.js';
const LandingPage = () => {
    return ( 
        <div>
            <LandingNavbar/>
            <LandingBody/>
            <LandingAdvantages/>
            <Footer/>
        </div>
     );
}
 
export default LandingPage;