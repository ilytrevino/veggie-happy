import React, { Component } from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import BackgroundImage from '../components/Image';
import firebase from '../config/FirestoreConfig.js';
import Home from './home';

class Login extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <Container p={0}>
        {this.state.user ? (
            <Home />
        ) : (
        <Container p={0}>
          <BackgroundImage src='https://i.postimg.cc/SRQ045Sj/verde.jpg' />
          <Card />
        </Container>
        )}
      </Container>
    );
  }
}

export default Login;
