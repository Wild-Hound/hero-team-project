import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Header.css"

const Headers = () => {
  return (
    <div className="fixed menu">
      <div className="header-container">
        
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Headers;