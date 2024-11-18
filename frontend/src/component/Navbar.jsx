import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="TechNova Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About us</li>
        <li>Product</li>
        <li>Services</li>
      </ul>
      <div className="nav-buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
