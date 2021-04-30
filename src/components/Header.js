import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          New Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </>
  );
};

export default Header;