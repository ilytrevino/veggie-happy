import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import BackgroundImage from '../components/Image';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Home = () => (
  <Container p={0}>
    <BackgroundImage src='https://i.postimg.cc/SRQ045Sj/verde.jpg' />
    <Card>
      <LoginForm />
      <RegisterForm />
    </Card>
  </Container>
);

export default Home;
