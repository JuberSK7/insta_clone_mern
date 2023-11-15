import React, { useState } from "react";
import store from "../redux/store";
import { login } from "../redux/features/auth/userAction";
import { Link, useNavigate } from "react-router-dom";
import InstaLogo from '../assests/instan_logo-r.png'
import './pages.style.css'
import { useSelector } from "react-redux";
import Loader from "../shared/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {loading, error} = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("Please Provide the all Feild");
      }
      store.dispatch(login({ email, password , navigate }));
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
    {
      loading ? (
        <Loader/>
      ):(
        <div className="form_box">
        <form onSubmit={handleLogin} className="form">
          <img src={InstaLogo} alt="insta" className="insta_name"/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button type="submit" className="submit_btn">Login</button>
        </form>
        <div className="link_box">
        <p className="link_line">
          Register here <Link to={"/"}>Register</Link>
        </p>
        </div>
      </div>
      )
    }
     
    </>
  );
};

export default Login;
