import React from 'react';
import styled from 'styled-components';
import firebase from '../config/FirestoreConfig.js';
import { Link } from 'react-router-dom';

const ListElement = styled.li`
  width: 20vw;
`;

export default class Footer extends React.Component {
  handleLogout= () => {
    firebase.auth().signOut();
  }
  render() {
    return(
      <nav className="navbar navbar-expand fixed-bottom navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <ListElement><Link to={'/home'} className="nav-link"><i className="fas fa-home" /></Link></ListElement>
          <ListElement><Link to={'/profile'} className="nav-link"><i className="fas fa-user" /></Link></ListElement>
          <ListElement><Link to={'/'}  onClick={this.handleLogout} className="nav-link"><i className="fas fa-sign-out-alt" /></Link></ListElement>
        </ul>
      </nav>
    )
  }
}
