import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Hugediscount.mp4' autoPlay loop muted />
      {/* <h1>Check out the Offers </h1>
      <p>on various categories</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Explore offers
        </Button>
        
      </div> */}
    </div>
  );
}

export default HeroSection;
