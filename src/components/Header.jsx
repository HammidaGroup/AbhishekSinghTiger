import React from 'react'
import "./Header.css"
import logo from "../assets/IMG-20260806-WA0008.jpg"
const Header = () => {
  return (
  <div className="heaDiv">
    <div className="l-h">
        <div className="logoDiv">
            <img src={logo} alt="logo" />
        </div>
    </div>
    <div className="r-h">
        <h3>Feuture Politician</h3>
    </div>
  </div>
  )
}

export default Header