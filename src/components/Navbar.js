import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.js";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  function toggleClick() {
    setClick((prevState) => !prevState);
  }
  function closeMobileMenu() {
    setClick((prevState) => false);
  }
  const [button, setButton] = useState(true);
  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(() => false);
    } else {
      setButton(() => true);
    }
  }

  // if we refresh the page,at a width less than 960 our sign up button appears,
  //to fix this we run the initialization once using use effect.

  window.addEventListener("resize", showButton);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          Kazoo Travel <FontAwesomeIcon icon={faCompass} />
        </Link>
        <div className='menu-icon' onClick={toggleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--s' input='SIGN UP'></Button>}
      </div>
    </nav>
  );
}

export default Navbar;
