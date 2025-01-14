import React from 'react'
import './Navbar.css'
import logo from '../../assets/Raydeon4.png'

function Navbar() {
  return (
    <nav>
        <div className='name'>
            <img src={logo} alt="Raydeon logo"  className='logo'/>
            <h2>Raydeon Systems</h2>
        </div>
        <div className="nav-items">
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
  )
}

export default Navbar