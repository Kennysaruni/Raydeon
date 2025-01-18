import React from "react";
import heroImage from "../../assets/Networkinghero.jpg";
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Networking Hero" className="hero-img" />
      <div className="hero-text">
        <h2>Wi-Fi that Wows!!</h2>
        <p>
          Say goodbye to buffering and hello to blazing-fast connections!
          Whether you're streaming, gaming, or just scrolling, we've got the
          speed, reliability, and coverage to keep you connected everywhere you
          roam.
        </p>
      </div>
    </div>
  );
}

export default Hero;
