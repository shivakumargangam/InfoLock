import React from 'react';
import '../Stylesheet/FAQ.css';

import LandingNavbar from '../Components/LandingNavbar.js';
import Footer from './footer';
import { Link } from "react-router-dom";

const FAQ = () => {
    return ( 
        <div className='FAQMainDiv'>

            <LandingNavbar/>

        <div className='FAQBodyDiv'>
            <h1>Frequently Asked Questions and Answers</h1>

            <div className='FAQQuest'>
            <span>
                How do i create a InfoLock Account ?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
                You need to register with an email and password. (Signup)
            </span>
        </div>

        <div className='FAQQuest'>
            <span>
                What other services are you compatible with?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
                Going forward, we plan on supporting additional services but have nothing else to announce at this time.
            </span>
        </div>
        <div className='FAQQuest'>
            <span>
            I have a technical problem or support issue I need resolved, who do I email?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
            The best way to get in touch with us is to email us at support@InfoLock.com.
            </span>
        </div>
        <div className='FAQQuest'>
            <span>
            Who can see my entries?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
                All entries are private by default which means they are not visible or can not be read by anyone without using your credintials.
            </span>
        </div>

        <div className='FAQQuest'>
            <span>
                Can my entries be read by others?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
                No one can read your notes(or)entries until you wish.
            </span>
        </div>

        <div className='FAQQuest'>
            <span>
            Can I add photos to my diary entries?
            </span>
        </div>
        <div className='FAQAns'>
            <span>
            No. Not at the moment, but we will maybe add this feature in the future, but currently we have nothing more to announce.
            </span>
        </div>

        </div>

        <Footer/>
    </div>);
}
export default FAQ;