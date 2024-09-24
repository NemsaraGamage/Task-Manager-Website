import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Just Do It 
            </a>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default NavBar;
