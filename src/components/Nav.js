import React from "react";
import ReactDOM from "react-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="left">
            <li>
              <a href="#">Shops</a>
              <ul className="drop-menu">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </li>
            <li>
              <a href="#">Cleanses</a>
            </li>
            <li>
              <a href="#">Build a Box</a>
            </li>
          </ul>
          <ul className="middle">
            <li className="">
              <a href="#">JUICE</a>
            </li>
            <li className="">
              <a href="#">SERVED HERE</a>
            </li>
          </ul>
          <ul className="right">
            <li className="">
              <a href="#">THE UNCONVENTIONAL</a>
            </li>
            <li className="">
              <a href="/login">WHO WE ARE</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
