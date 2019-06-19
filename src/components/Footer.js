import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ListElement = styled.li`
  margin: 0 40%;
`;

const Footer = () => (
  <nav className="navbar navbar-expand fixed-bottom navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <ListElement><Link to={'/home'} className="nav-link"><i className="fas fa-home"></i></Link></ListElement>
      <ListElement><Link to={'/profile'} className="nav-link"><i className="fas fa-user"></i></Link></ListElement>
    </ul>
  </nav>
);

export default Footer;
