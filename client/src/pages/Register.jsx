import React, { useState } from "react";
import store from "../redux/store";
import { useSelector } from 'react-redux' 
import { register } from "../redux/features/auth/userAction";
import {Link, useNavigate} from 'react-router-dom'
import InstaLogo from '../assests/instan_logo-r.png'
import './pages.style.css'
import Loader from "../shared/Loader";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {loading, error} = useSelector((state) => state.user)
  

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      if (!username || !email || !password) {
        alert("Please Provide the all Feild");
        return
      }
  
       store.dispatch(register({ username, email, password, navigate }));
     
    } catch (error) {
      alert(error.messgae);
    }
  };

  return (
    <>
  {error && alert('error', error)}
    {
      loading ? (
        <Loader/>
      ):(
    
        <div className="form_box">
      <form onSubmit={handleRegister} className="form">
      <img src={InstaLogo} alt="insta" className="insta_name"/>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your User Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button type="submit" className="submit_btn">Register</button>
      </form>
      <div className="link_box">
      <p className="link_line">If you are already Register <Link to={'/login'}>Login</Link></p>
      </div>
    </div>

      )
    }
  
    </>
  );
};

export default Register;
