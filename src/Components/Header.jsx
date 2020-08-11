import React, { Component } from "react";
import "./Header.css";
import QuoteMaker from "./QuoteMaker";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1 className="header">Quote Me</h1>
      </div>
    );
  }
}

export default Header;
