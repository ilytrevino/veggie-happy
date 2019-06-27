import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyProfile from '../components/MyProfile';

class Profile extends React.Component {

  render() {
    return (
      <Container p={0}>
        <Header />
        <MyProfile />
        <Footer />
      </Container>
    );
  }
}

export default Profile;
