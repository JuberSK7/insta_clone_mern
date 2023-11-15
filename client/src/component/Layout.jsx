import React from 'react'
import Aside from './Aside'
import Home from './Home'
import "./commen.style.css";


const Layout = () => {
  return (
    <>
     <div className="layout">
      <div className="aside" > <Aside /></div>
     <div  className="home">  <Home /></div>
    
    </div>

    </>
  )
}

export default Layout
