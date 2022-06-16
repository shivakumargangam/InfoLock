import React from 'react';
import LoginLogo from '../media/LoginLogo.svg'
import '../Stylesheet/Login.css';
import {Link} from 'react-router-dom';
const LoginPage = () => {
    return ( <div >
                <div className='LOPLogo'>
                    <img src={LoginLogo}/>
                </div>
               
                    <div className='LOPcredbox'>
                        <div className='LOPhead'>
                            <span>Login</span>
                        </div>
                
                    {/* <label className="LBEmailLabel">Enter your email:</label>
                    <input className="LBEmailInput LBInput" type="email" /> */}
                    <input type="email" class="LBEmailDiv" id="email" placeholder="Email" data-text="Please enter a valid email address."></input>
                    <input type="password" className="LBPasswordDiv" id="password" placeholder="Password" data-text="The password must be between 6-20 characters long."></input>
                    {/* <div>
                    <input type="text" id="email" placeholder="Email" data-text="Please enter a valid email address." ></input>
                    </div> */}
                <div className="LBLoginButtonDiv">
                    <button className="LBLoginButton" >
                        Login
                    </button>
                </div>
                <div className="LBsignuptext">
                    <span>
                        Don't have an account ? <Link to="/signup">Signup</Link>
                    </span>
                </div>
            </div>
        
    </div> );
}
 
export default LoginPage;