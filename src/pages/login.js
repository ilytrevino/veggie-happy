import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Container from '../components/Container';
import Card from '../components/Card';
import BackgroundImage from '../components/Image';
import firebase from '../config/FirestoreConfig.js';

class Login extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      this.state.user ? (
        <Redirect to='/home' />
      ) : (
        <Container p={0}>
          <BackgroundImage src='https://i.postimg.cc/SRQ045Sj/verde.jpg' />
          <Card />
        </Container>
      )
    );
  }
}

export default Login;
