import React from 'react';
import '../Stylesheet/Signup.css';
import LoginLogo from '../media/LoginLogo.svg'
import {Link} from 'react-router-dom';
const SignupPage = () => {
    return (<div >
        <div className='LOPLogo'>
            <img src={LoginLogo}/>
        </div>
        
        <div className='LOPcredbox'>
            <div className='LOPhead'>
                <span>Signup</span>
            </div>
            <input type="email" class="LBEmailDiv" id="email" placeholder="Email" data-text="Please enter a valid email address."></input>
            <input type="password" className="LBPasswordDiv" id="password" placeholder="Password" data-text="The password must be between 6-20 characters long."></input>
            <input type="password" className="LBPasswordDiv" id="password" placeholder="Confirm password" data-text="The password must be between 6-20 characters long."></input>
            <div className="LBLoginButtonDiv">
                <button className="LBLoginButton" >
                        Signup
                </button>
            </div>
            <div className="LBLogintext">
                    <span>
                        Already have an account ? <Link to="/login">Login</Link>
                    </span>
                </div>
        </div>

    </div>
    );
}

export default SignupPage;
