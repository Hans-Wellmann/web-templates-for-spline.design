import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    // <div className="navbar">
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
      <div class="container">
        <Link class="navbar-brand" to="/">
          Clickonrefresh Templates
        </Link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li
              class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                }`}
            >
              <Link class="nav-link" to="/">
                Welcome
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li
              class={`nav-item  ${props.location.pathname === "/guide" ? "active" : ""
                }`}
            >
              <Link class="nav-link" to="/Guide">
                Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default withRouter(Navbar);