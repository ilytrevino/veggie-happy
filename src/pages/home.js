import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const HomepageLogo = styled.img`
  max-width: 80vw;
  margin: 1rem auto;
  display: block;
`;

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container p={0}>

        <Header />
        <Container p={0} bg={'#E9EBEE'}>
          <Post />
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Home;
