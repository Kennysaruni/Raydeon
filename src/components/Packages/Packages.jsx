import React from "react";
import "./Packages.css";

function Packages() {
  return (
    <div className="packages-container">
      <h2 className="header">Join Our Clientele.</h2>
      <div className="packages-div">
        <div className="package">
          <p className="price">8Mbps</p>
          <h2>
            2000<span>/month</span>
          </h2>
          <div className="perks">
            <ul>
              <li>Great for browsing and light streaming</li>
              <li>Connect up to 4 devices</li>
              <li>Free installation</li>
              <li>99% uptime guarantee</li>
            </ul>
          </div>
        </div>
        <div className="package">
          <p className="price">15Mbps</p>
          <h2>
            2500<span>/month</span>
          </h2>
          <div className="perks">
            <ul>
              <li>Perfect for streaming in HD</li>
              <li>Connect up to 8 devices</li>
              <li>Free installation and router</li>
              <li>Access to 24/7 customer support</li>
            </ul>
          </div>
        </div>
        <div className="package">
          <p className="price">20Mbps</p>
          <h2>
            3000<span>/month</span>
          </h2>
          <div className="perks">
            <ul>
              <li>Designed for multitasking and video calls</li>
              <li>Connect up to 16 devices</li>
              <li>Free installation and advanced router</li>
              <li>Priority customer support</li>
            </ul>
          </div>
        </div>
        <div className="package">
          <p className="price">30Mbps</p>
          <h2>
            5500<span>/month</span>
          </h2>
          <div className="perks">
            <ul>
              <li>Seamless 4K streaming and gaming</li>
              <li>Connect up to 32 devices</li>
              <li>Ultra-low latency for online gaming</li>
              <li>Free premium installation and router</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="important-info">
        <p>
          To get connected to Fiber internet, you'll need to get a Wi-Fi Router
          at Ksh 3,000 (for 8mbps Package) plus 8 Mbps Package cost. For any
          other package higher than 8 Mbps we give you a free router.
        </p>
        <p>
          For customers outside our Fiber coverage, we offer wireless
          connectivity with a one-time installation equipment cost of Ksh 8,000.
        </p>
      </div>
    </div>
  );
}

export default Packages;
