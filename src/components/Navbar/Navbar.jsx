import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Raydeon4.png";
import menu from "../../assets/icons8-menu.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="name">
        <img src={logo} alt="Raydeon logo" className="logo" />
        <h2 className="title">Raydeon Systems</h2>
      </div>

      <div className="hamburger-menu">
        <button onClick={toggleMenu}>
          <img src={menu} alt="menu" className="hamburger" />
        </button>
      </div>

      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="">See Plans</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
