import React, { useState } from "react";
import './Header.css'
import {NavLink, Link } from "react-router-dom";

const Header = () => {
  // const[isActive,setIsActive]=useState(false);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to={'/'} className="navbar-brand fw-bold fs-4">
          JobPlace Hub
        </Link>
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
            {/* <li className="nav-item">
              <Link className="nav-link" to={'/'}>
              Home
              </Link>
            </li> */}
            <li className="nav-item">
              <NavLink to={'/charts'} className={({isActive})=>(isActive)?'bg-info-subtle rounded  nav-link':'nav-link'}>
                Statistics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/applyjobs'}  className={({isActive})=>(isActive)?'bg-info-subtle rounded  nav-link':'nav-link'}>
                Applied Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/blog'}  className={({isActive})=>(isActive)?'bg-info-subtle rounded  nav-link':'nav-link'}>
                Blogs
              </NavLink>
            </li>
          </ul>
          <button className="btn text-white fw-semibold" id="startBtn" >Start Applying</button>

        </div>
      </div>
    </nav>
  );
};

export default Header;
