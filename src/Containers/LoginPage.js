import React from "react";
import LoginLogo from "../media/LoginLogo.svg";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/Login.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";
import Cookies from "universal-cookie";
const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const login = (props) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((usercredential) => {
        const user = usercredential.user;
        // props.setUserData(email);
        const cookies = new Cookies();
        cookies.set("user", user, { path: "/",maxAge: 3600 });
        console.log(cookies.get("user"));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div>
      <div className="LOPLogo">
        <img src={LoginLogo} />
      </div>

      <div className="LOPcredbox">
        <div className="LOPhead">
          <span>Login</span>
        </div>

        {/* <label className="LBEmailLabel">Enter your email:</label>
                    <input className="LBEmailInput LBInput" type="email" /> */}
        <input
          type="email"
          class="LBEmailDiv"
          id="email"
          placeholder="Email"
          data-text="Please enter a valid email address."
        ></input>
        <input
          type="password"
          className="LBPasswordDiv"
          id="password"
          placeholder="Password"
          data-text="The password must be between 6-20 characters long."
        ></input>
        {/* <div>
                    <input type="text" id="email" placeholder="Email" data-text="Please enter a valid email address." ></input>
                    </div> */}
        <div className="LBLoginButtonDiv">
          <button className="LBLoginButton" onClick={login}>
            Login
          </button>
        </div>
        <div className="LBsignuptext">
          <span>
            Don't have an account ? <Link to="/signup">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
