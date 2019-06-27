import React from "react";
import styled from 'styled-components';
import Container from '../components/Container';
import firebase from '../config/FirestoreConfig';

const ProfileName = styled.h1`
  font-family: 'PT Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const ProfileInfo = styled.p`

`;

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: "Ily Trevino",
    });
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <Container>
        <ProfileName>{this.state.user}</ProfileName>
        <ProfileInfo></ProfileInfo>
      </Container>
    )
  }
}

export default MyProfile;
