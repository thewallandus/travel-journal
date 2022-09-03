import React from "react";
import { ReactDOM } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import './Header.css'


function Header() {
    return (
        <div className="header">
            <FaGlobeAmericas color="white" size="1.5rem"/>
            <h3 className="header--text">my travel journal</h3>
        </div>
    )
}

export default Header
