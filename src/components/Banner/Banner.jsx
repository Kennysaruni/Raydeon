import React from 'react'
import './Banner.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Banner() {
  return (
    <div className='banner-cont'>
        <h2 className="text">Why choose our services?</h2>
        <div className="services">
            <div className="service">
                <i className='fas fa-tools service-icon'></i>
                <p>Reliable and efficient tools to get the job done right.</p>
            </div>
            <div className="service">
                <i className='fas fa-shield-alt service-icon'></i>
                <p>Secure solutions to protect your assets and data.</p>
            </div>
            <div className="service">
                <i className='fas fa-headset service-icon'></i>
                <p>24/7 customer support to assist you anytime.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner