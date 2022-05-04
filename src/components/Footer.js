import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import footerData from "./footerData.js";
import Button from "./Button.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Footer() {
  console.log(footerData);
  return (
    <div className='footer-container'>
      <section className='subscription'>
        <p className='subscription-text'>
          Join the Kazoo newsletter for all the latest updates
        </p>
        <div className='subscription-input-container'>
          <form className='subscription-form'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='subscription-input'
            />
            <Button buttonStyle='btn--s'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links-container'>
        {footerData.map((item) => (
          <ul className='footer-links-titles'>
            {item.linksTitle}
            {item.links.map((link) => (
              <li className='footer-links'>{link}</li>
            ))}
          </ul>
        ))}
      </div>
      <section className='footer-bar'>
        <div className='footer-logo'>
          <FontAwesomeIcon icon={faCompass} className='facompass' />
          Kazoo Travel
        </div>
        <p className='copyright'>Kazoo Travel © 2022</p>
        <div className='social-media-icons'>
          <FontAwesomeIcon icon={faFacebook} className='faFacebook' />
          <FontAwesomeIcon icon={faYoutube} className='faYoutube' />
          <FontAwesomeIcon icon={faInstagram} className='faInstagram' />
          <FontAwesomeIcon icon={faTwitter} className='faTwitter' />
        </div>
      </section>
    </div>
  );
}

export default Footer;
