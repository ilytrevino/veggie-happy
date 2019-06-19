import React from 'react';
import styled from 'styled-components';
import { Card } from 'rebass';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../App.css';

const FrontCard = styled(Card).attrs({
  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)'
})`
  background:rgba(255,255,255,0.95);
  border-radius: 2rem;
  text-align: center;
  top: 5vh;
  left: 7vw;
  width: 85%;
  height: 80%;
  position: absolute;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  transition: transform 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50%;
`;

const FlippedCard = styled(FrontCard)`
  width: 85%;
  height: 90%;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
`;

class CardElement extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: true,
      card: 'back'
    }
  }

  handleCardChange = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }

  render() {
    const MyCard = this.state.active ? FrontCard : FlippedCard;

    return (
      <MyCard className={this.state.card}>
        {this.state.active
          ? <LoginForm className="login" handleCardChange={this.handleCardChange}/>
          : <RegisterForm className="register" handleCardChange={this.handleCardChange}/>
        }
      </MyCard>
    )
  }
}

export default CardElement;
