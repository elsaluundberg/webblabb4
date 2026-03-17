import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/golfLogga.png'; // Importera bilden
import '../styles/Header.css';

function Header() {
  return (
    <header>
        <Link to="/" className="logo-link">
                <img src={logo} alt="Gunnarns Golfklubb" className="logo" />
                <div className="logo-text">
                    <span className="name-top">Gunnarn</span><br />
                    <span className="name-bottom">Golfklubb</span>
                </div> 
        </Link>
        <nav>
            <ul>
                <li><Link to="/spela">Spela hos oss</Link></li>
                <li><Link to="/anlaggning">Anläggning</Link></li>
                <li><Link to="/verksamhet">Verksamhet</Link></li>
                <li><Link to="/medlem">Medlem</Link></li>
                <li><Link to="/om-oss">Om oss</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;