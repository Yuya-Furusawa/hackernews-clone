import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <>
      <HeaderTitle>Hacker News Clone</HeaderTitle>
      <Description>This is a clone of <a href="https://news.ycombinator.com/">news.ycombinator.com</a></Description>
      <Navigation>
        <NavLink to="/top" activeStyle={{fontWeight: "bold", textDecoration: "underline"}}>
          Top Stories
        </NavLink>
        <NavLink to="/new" activeStyle={{fontWeight: "bold", textDecoration: "underline"}}>
          New Stories
        </NavLink>
        <NavLink to="/best" activeStyle={{fontWeight: "bold", textDecoration: "underline"}}>
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

const Description = styled.p`
  text-align: center;
  color: #e17055;

  a {
    color: #e17055;
    text-decoration: underline;
  }
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