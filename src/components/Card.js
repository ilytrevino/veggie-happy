import React from 'react';
import styled from 'styled-components';
import { Card } from 'rebass';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const FrontCard = styled(Card).attrs({
  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)'
})`
  background:rgba(255,255,255,0.95);
  border-radius: 2rem;
  text-align: center;
  top: 5vh;
  left: 5vw;
  width: 90%;
  height: 90%;
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
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
`;

class CardElement extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: true
    }
  }

  handleCardChange = () => {
    this.setState((prevState) => ({
      active: !prevState.active }));
  }

  render() {
    const MyCard = this.state.active ? FrontCard : FlippedCard;

    return (
      <MyCard>
        {this.state.active
          ? <LoginForm handleCardChange={this.handleCardChange}/>
          : <RegisterForm handleCardChange={this.handleCardChange}/>
        }
      </MyCard>
    )
  }
}

export default CardElement;
