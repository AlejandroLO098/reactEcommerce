import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_content">
        <div className="hero_items">
          <h1 className="hero_h1">The Best Nintendo Collection</h1>
          <p className="hero_p">Play It Proud</p>
          <Link to="/products">
            <button className="hero_btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
