import React from "react";
import ReactDOM, { render } from "react-dom";
import HeroImage1 from "../assets/hero-image-1.png";

class Menus extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu-block__top">
          <img src={HeroImage1} />
          <div className="menu-block__dek">
            <button className="btn">VIEW MENU</button>
          </div>
        </div>
        <div className="u-center">
          <h1 className="u-header-margin--b">YOU BUY IT BY THE BOX</h1>
          <div>
            Choose form 7-8 products from your liking and have it delivered to
            your door
            <br /> as often as you want.
          </div>
        </div>
        <div className="menu-block__section">
          <div className="menu-block__option">
            Build your box
            <div className="menu-block__num">01</div>
          </div>
          <div className="menu-block__option">
            Subscribe Or Don't
            <div className="menu-block__num">02</div>
          </div>
          <div className="menu-block__option">
            Pick a Delivery Day
            <div className="menu-block__num">03</div>
          </div>
        </div>
        <div className="u-center u-margin-t--xxl">
          <button className="btn">SHOP THE MENU</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Menus;
