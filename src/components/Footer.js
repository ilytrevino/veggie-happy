import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CustomFooter = styled.footer`
  border-top: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <CustomFooter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/home'} className="nav-link">Home</Link></li>
        <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
      </ul>
    </nav>
  </CustomFooter>
);

export default Footer;
