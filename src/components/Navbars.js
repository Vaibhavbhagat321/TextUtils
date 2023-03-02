import React from "react";
// import PropTypes from "prop-types";

export default function Navbars(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${
        props.mode === "light" ? "light" : "dark"
      }`}
      data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } me-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleBMode}
              id="flexSwitchCheckDefaultB"
              
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
        
            >
              Blue Dark Mode
            </label>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } me-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleGMode}
              id="flexSwitchCheckDefaultG"
              
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Green Dark Mode
            </label>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } me-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.togglePMode}
              id="flexSwitchCheckDefaultP"
              
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Pink Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbars.propTypes = {
//   title: PropTypes.string.isRequired,
//   mode: PropTypes.string.isRequired,
//   toggleMode: PropTypes.func.isRequired,
// };

// Navbars.defaultProps = {
//   title: "TextUtils D",
//   mode: "dark",
// };
