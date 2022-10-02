import React from 'react';
import './NavBar.css';
import logo from "./images/logo.png";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to={'/'} id="logoCtr">
                <img id="logo" src={logo} alt={'Logo'}/>
                <h1>Coral Doctor</h1>
            </Link>
            <div className="spacer"/>
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <h2 className="pagelink">
                    About
                </h2>
            </Link>
            <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                <h2 className="pagelink">
                    Contact Us
                </h2>
            </Link>
        </nav>
    )
}

export default NavBar;