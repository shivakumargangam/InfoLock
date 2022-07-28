import React from 'react';
import LandingNavbar from './LandingNavbar';
import "../Stylesheet/About.css";
import team from "../media/team.svg";
import Footer from './footer';
const About = () => {
    return(
        <div className='AboutMainDiv'>
            <LandingNavbar/>
            <div className='ABHeading'>About us</div>
            <div className='AboutBodyDiv'>
                <div className='AboutImg'><img src={team}/></div>
                <div className='AboutContent'>
                    <div className='AboutHeading'>
                    <span className='AboutHeadName'>Problem Statement</span>
                    
                    <p>Create an web platform where user can store there information. The infromation should be secure and it should not allow other to access the information. The UI of this website should be interactive and user-friendly.</p>
                    </div>
                    
                    <div className='AboutHeading'>
                    <span className='AboutHeadName'>Our solution</span>
                    
                    <p>In our website you can create multiple notes as you required and  you can access them from any place. The data your are provided is stored in encrypted format to ensure user's privacy .</p>
                    </div>
                    <div className='AboutHeading'>
                        <span className='AboutHeadName'>Our Team</span>
                        <div className='TeamDetails'>
                            <div className='TeamMember'>
                                <span className='TeamName'>
                                    G. Shiva
                                </span>
                                <a href='mailto:gangamshivakumar1419@gmail.com'>gangamshivakumar1419@gmail.com</a>
                            </div>
                            <div className='TeamMember'>
                                <span className='TeamName'>
                                    K. Mani Sai
                                </span>
                                <a href='mailto:kamutalamanisai26@gmail.com'>kamutalamanisai26@gmail.com    </a>
                            </div>
                        </div>
                    </div>



                </div>
                
            </div>
            <div className='ABFooterDiv'>        
                <Footer/>
            </div>
        </div>


    );
}
export default About;