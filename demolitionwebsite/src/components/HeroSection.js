import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
      /> */}
      {/* <img src='img-5.jpg' alt= 'Eureka Ice House Demo'></img> */}
      {/* <h1>Your Demolition Awaits!</h1> */}
      <p>Contact us today.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
