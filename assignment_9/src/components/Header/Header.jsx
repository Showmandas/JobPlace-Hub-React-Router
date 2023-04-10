import React from "react";
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          Developer's Hub
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
              <a className="nav-link active" aria-current="page" href="#">
                Statistics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Applied Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
          </ul>
          <button className="btn text-white fw-semibold" id="startBtn" >Start Applying</button>

        </div>
      </div>
    </nav>
  );
};

export default Header;
