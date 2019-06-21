import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Posts from '../components/Posts';
import PostWrite from '../components/PostWrite';

class Home extends React.Component {

  render() {
    return (
      <Container p={0}>
        <Header />
        <PostWrite user={this.props.user}/>
        <Posts />
        <Footer />
      </Container>
    );
  }
}

export default Home;
