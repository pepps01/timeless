import React from 'react'
import './Header.css'
import { FaAlignRight } from 'react-icons/fa';
import {Links} from './Links';

const Header = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="nav">
      <div className="landingPageLogo">
        <img src='/images/afrihealth.png' alt='logo' />
        <h2>afrihealth</h2>
      </div>
      <div className="desktopNavbarBtn">
        <ul className="navbarLinks">
          {Links.map((link, index) => (
            <div key={index} className="navbarLink">
              <li>{link.name}</li>
              <span>
                {link.subLinks && (
                  <img src='/images/down.png' alt='down arrarow' />
                )}
              </span>
            </div>
          ))}
        </ul>
        <div className="getStartedBtn"><a href="/contact">Contact Us</a></div>
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="hamburger"><FaAlignRight size={20} /></div>
      </div>
    </nav>
  );
};

export default Header;
