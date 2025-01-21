import React from "react";
import "./Packages.css";

function Packages() {
  return (
    <div className="packages-div">
      <div className="package">
        <p className="price">8mbps</p>
        <h2>
          2000<span>/month</span>
        </h2>
        <div className="perks">
          <ul>
            <li>Ideal for personal use</li>
            <li>Connect upto 6 devices</li>
            <li>Free installation</li>
          </ul>
        </div>
      </div>
      <div className="package">
        <p className="price">15mbps</p>
        <h2>
          2500<span>/month</span>
        </h2>
        <div className="perks">
          <ul>
            <li>Ideal for personal use</li>
            <li>Connect upto 32 devices</li>
            <li>Free installation</li>
          </ul>
        </div>
      </div>
      <div className="package">
        <p className="price">20mbps</p>
        <h2>
          3000<span>/month</span>
        </h2>
        <div className="perks">
          <ul>
            <li>Ideal for demanding tasks</li>
            <li>Connect upto 64 devices</li>
            <li>Free installation</li>
          </ul>
        </div>
      </div>
      <div className="package">
        <p className="price">30mbps</p>
        <h2>
          5500<span>/month</span>
        </h2>
        <div className="perks">
          <ul>
            <li>Connect upto 32 devices</li> 
            <li>Very low latency</li> 
            <li>Free installation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Packages;
