import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <span className = "separator"></span>
                <li><Link to="/about">About</Link></li>
                <span className = "separator"></span>
                <li><Link to="/carrer">Carrer</Link></li>
                <span className = "separator"></span>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </header>

    );
}

export default Header;