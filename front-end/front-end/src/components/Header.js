import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="menu">
        <ul>
        <button type="button" className="btn btn-outline-info" data-bs-toggle="button" color="black">
          <NavLink to="/" className="no-underline nav-link">Home</NavLink>
        </button>
        <button type="button" className="btn btn-outline-info" data-bs-toggle="button">
          <NavLink to="/statistics" className="no-underline nav-link"> 통계</NavLink>
        </button>
        <button className="btn btn-outline-info" data-bs-toggle="button">
          <NavLink to="/analysis" className="no-underline nav-link">분석</NavLink>
        </button>
        <button className="btn btn-outline-info" data-bs-toggle="button">
          <NavLink to="/badip" className="no-underline nav-link">악성ip</NavLink>
        </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
