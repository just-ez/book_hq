import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../redux/auth";
import "../css/nav.css";
import menuBtn from "../assets/img/menu_FILL0_wght400_GRAD0_opsz48.svg";
import logo from "../assets/img/favicon_io/android-chrome-512x512.png"
let Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state)=> state.Auth)
  const userDetails = useSelector((state)=> state.user)
  const user = userDetails.userdata
  let openNav = () => {
    document.querySelector(".menuBar").style.height = "100vh";
    document.querySelector(".menuBar").style.display = "flex";
  };

  let closeNav = () => {
    document.querySelector(".menuBar").style.height = "0vh";
    document.querySelector(".menuBar").style.display = "none";
  };

  return (
    <div className="nav">
      <h2>
        <Link to="/"><img src={logo} alt="HQ" /></Link>
      </h2>
    
      {!isLoggedIn.value ? (
        <div className="get_started">
           <ul>
           <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/a  bout">Books</Link>
      </li>
      <li>
        <Link to="/write">write</Link>
      </li>
    </ul>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
      ) : (
        <>
           <div className="searchBar">
            <input type="text" name="" id="" placeholder="search books" />
            <button>search</button>
          </div>
          <div className="prof-wr">
         <div className="profile" title={user.user_name}>
            <div className="profile-img">
              {user.profileImg ? (
                <img src={user.profileImg} alt="" />
              ) : (
                <span className="material-symbols-outlined">account_circle</span>
              )}
            </div>
            <div className="drop-down">
                <ul>
                  <li>profile</li>
                  <li onClick={()=> {
                    dispatch(loggedOut())
                    navigate('/login')
                  }}>Logout</li>
                </ul>
            </div>
          </div>
          <button>
            write
          </button>
          </div>
        </>
      )}
      <img src={menuBtn} alt="" className="menuBtn" onClick={openNav} />
      <div className="menuBar">
        <div className="cancel" onClick={closeNav}>
          Close
        </div>
        <button onClick={closeNav}>
          <Link to="/signup">Get Started</Link>
        </button>
        <h2 onClick={closeNav}>
          <Link to="/login">Login</Link>
        </h2>
      </div>
    </div>
  );
};

export default Nav;
