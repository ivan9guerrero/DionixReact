import React, { useState } from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="icon-navbar" src="/public/img/android-chrome-192x192.png" alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Relojes</a>
        <a href="/service">Service</a>
        <a href="/contact">Contacto</a>
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