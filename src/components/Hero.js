import React from "react";
import Button from "./Button";
import "./Hero.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--s'
          buttonSize='btn--lar'
          input='Get Started'
        />
        <Button
          className='btns'
          buttonStyle='btn--p'
          buttonSize='btn--lar'
          input='Watch Trailer'
          inputIcon={<FontAwesomeIcon icon={faCirclePlay} />}
        />
      </div>
    </div>
  );
}

export default Hero;