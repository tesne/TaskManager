import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="text-white">
          Navegacion
          <span className="badge badge-pill badge-light ml-2">{}</span>
        </a>
      </nav>
    );
  }
}

export default Navigation;
