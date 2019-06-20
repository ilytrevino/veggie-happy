import React from 'react';
import styled from 'styled-components';
import firebase from '../config/FirestoreConfig.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ListElement = styled.li`
  margin: 0 40%;
`;

export default class Footer extends React.Component {
  logout= () => {
    firebase.auth().signOut();
  }
  render() {
    return(
      <nav className="navbar navbar-expand fixed-bottom navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <ListElement><Link to={'/home'} className="nav-link"><i className="fas fa-home"></i></Link></ListElement>
          <ListElement><Link to={'/profile'} className="nav-link"><i className="fas fa-user"></i></Link></ListElement>
          <ListElement><Link to={'/'}  onClick={this.logout} className="nav-link"><i className="fas fa-sign-out-alt"></i></Link></ListElement>
        </ul>
      </nav>
    )
  }
}
