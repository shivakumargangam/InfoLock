import React from 'react';
import '../Stylesheet/Signup.css';
import LoginLogo from '../media/LoginLogo.svg'
import {Link} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";
const SignupPage = () => {
    console.log(app);
    const auth = getAuth();
const signup=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("sucess");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
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
                <button className="LBLoginButton" onClick={signup}>
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
