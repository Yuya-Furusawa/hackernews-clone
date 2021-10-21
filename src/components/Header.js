import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <>
      <HeaderTitle>Hacker News Clone</HeaderTitle>
      <Navigation>
        <NavLink to="/top">
          Top Stories
        </NavLink>
        <NavLink to="/new">
          New Stories
        </NavLink>
        <NavLink to="/best">
          Best Stories
        </NavLink>
      </Navigation>
    </>
  );
};

export default Header;

const HeaderTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #e17055;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 10px;
    text-transform: uppercase;
    color: #e17055;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;