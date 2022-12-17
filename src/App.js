import React, { } from "react";
import "../src/css/App.css";
// import Nav from "../src/components/nav";
import LandingPage from "../src/components/landinPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../src/components/signup";
import Login from "../src/components/login";
import Books from "./components/books";
import Protected from "./utils/protected";
import {  useSelector } from 'react-redux'


function App() {

  const isLoggedIn = useSelector((state)=> state.Auth)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={ 
            <Protected isLoggedIn={isLoggedIn.value} >
              
              <Books />
             
            </Protected>
           } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
