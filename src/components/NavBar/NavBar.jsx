import React, { useState } from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="icon-navbar" src="/public/img/android-chrome-192x192.png" alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/relojes">Relojes</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <CartWidget />
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;