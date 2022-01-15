import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    // <div className="navbar">
      <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Phylogeny Explorer Project Portal
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Welcome">
                  Welcome
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/users" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Users">
                  Users
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/developers" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Developers">
                  Developers
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/onboarding" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Onboarding">
                  Onboarding
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/ProjectManagement" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/ProjectManagment">
                  Project Management
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