import React from "react";
import logo from "../images/logo.png"

function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" style={{ color: 'white', fontSize:'3rem' }}><img src={logo} style={{width:'55px', height:'55px', background:'#f1f1f1', borderRadius:'50%'}} alt="Sushi-Logo"></img> Full-stack Sushi</span>
            </div>
        </nav>
    );
}

export default Navbar;