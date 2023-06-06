import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://roktim.live">
            My Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
