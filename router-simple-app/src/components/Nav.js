import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle}><li>Home</li></Link>
                <Link style={navStyle}><li>Contact</li></Link>
                <Link style={navStyle}><li>Shop</li></Link>
                <Link style={navStyle}><li>About</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;