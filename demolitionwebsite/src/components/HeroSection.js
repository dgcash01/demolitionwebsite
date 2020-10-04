import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Your Demolition Awaits!</h1>
      <p>Contact us today.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
