import React, { useState } from "react";
import "./Grid.css";
import logo from '../Assets/ecelllogo.png'
const Body = () => {
  

  return (
    <div className="body-content">
      
      <div className="section gradient-section">
        
      </div>

     
      <div className="section logo-section">
        <img
          src={logo} 
          alt="E-Cell Logo"
          className="logo"
        />
      </div>

     
      <div className="section grid-section">
        <div className="grid-container">
          
        </div>
      </div>
    </div>
  );
};

export default Body;
