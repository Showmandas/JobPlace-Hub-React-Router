import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          JobPlace Hub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#">
                Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Applied Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/blog'} className="nav-link" href="#">
                Blogs
              </Link>
            </li>
          </ul>
          <button className="btn text-white fw-semibold" id="startBtn" >Start Applying</button>

        </div>
      </div>
    </nav>
  );
};

export default Header;
