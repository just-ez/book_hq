// Hooks
import React, {   } from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {loggedIn} from '../redux/auth'
import {setDetails} from '../redux/userData'
import { useCookies } from 'react-cookie';

//  assets
import logo from "../assets/img/favicon_io/favicon.ico";
import go from "../assets/img/download.png";

let Login = () => {
  const [cookie, setCookie] = useCookies(['token'])
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  //  handle form request and response
  let handleForm = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password, isVerified: false }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    // set cookie change loggin state
    setCookie('token', data.token)
   if (cookie) { 
    dispatch(setDetails(data.user))
    dispatch(loggedIn(data.token))
    
  
  }
     // redirect
    return  navigate('/home')

  };






  // return jsx
  return (
    <div className="signup">
      <div className="showRes" id="showRes"></div>
      <form onSubmit={handleForm}>
        <div className="form-header">
          <h3>Login Here</h3>
          <img src={logo} alt="" />
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="email" required/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required/>

        <button>Login</button>
        <div className="social">
          <div className="go">
            <img src={go} alt="" /> Sign in with Google
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
