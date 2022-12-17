import React, {  } from "react";
import "../css/signup.css";
import logo from '../assets/img/favicon_io/favicon.ico'
import go from '../assets/img/download.png'

let Signup = () => {
  
  let handleForm = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const res = await fetch("http://localhost:4000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        user_name: username,
        email,
        password,
        phone_number: 2349135248299,
        isVerified: false,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    const showRes = document.getElementById("showRes");
    showRes.innerHTML = "";

    // sending response
    if (data.statusCode === 200) {
      showRes.style.borderLeft = "4px solid green";
      showRes.innerHTML = `<h2> ${data.msg} </h2>`;
      return (showRes.style.left = "72%");
    }

    //checking for error in res
    if (data.statusCode === 400 || 404 || 500) {
      //styling showRes
      showRes.style.borderLeft = "4px solid red";
      showRes.style.left = "72%";

      // checking err type
      if (data.response) {
        return (showRes.innerHTML = `<h2> ${data.message} </h2>`);
      }
      for (let i = 0; i < data.message.length; i++) {
        const h2 = document.createElement("h2");
        h2.innerHTML = data.message[i];
        showRes.append(h2);
      }
    } 
  };

  return (
    <div className="signup">
      <div className="showRes" id="showRes">
      </div>
     
      <form onSubmit={handleForm}>
      <div className="form-header">
     <h3>Signup Here</h3> 
        <img src={logo} alt="" />
     </div>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" required/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="email" required/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{6,}"/>

        <button>Sign Up</button>
        <div className="social">
          <div className="go">
            <img src={go} alt="" /> Sign up with Google
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
