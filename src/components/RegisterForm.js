import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Register = styled.div`
  position: relative;
  background:rgba(255,255,255,0.95);
  border-radius: 2rem;
  margin: 1rem auto;
  text-align: center;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  top: -95vh;
  height: 95vh;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
`;

const Form = styled.form`
  padding: 0;
  text-align: center;
`;

const FormLabel = styled.label`
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

const FormInput = styled.input`
  text-align: center;
  font-family: inherit;
  display: block;
  font-size: 0.9rem;
  background-color: #A7EEA8;
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 0.1rem;
`;

const FormAnchor = styled.a`
  color: #69D5B5;
  text-decoration: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
`;

const FormLogo = styled.img`
  max-width: 50vw;
  margin: 1rem auto;
  display: block;
`;

const SubmitButton = styled.input`
  font-family: inherit;
  font-size: 1rem;
  border-radius: 1rem;
  margin: 0.2rem;
  margin-top: 1rem;
  padding: 0.2rem 1rem;
  background-color: #FF8D7A;
  border:0.16em solid rgba(255,255,255,0);
  border-radius: 1rem;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  transition: all 0.2s;
`;

class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'your-email@domain.com'
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleFlip = () => {

  }

  render() {
    return (
      <Register>
        <Form onSubmit={this.handleSubmit}>
          <FormLogo src={Logo} />
          <FormLabel> Email </FormLabel>
          <FormInput onChange={this.handleChange} />
          <FormLabel> Password </FormLabel>
          <FormInput type="password" />
          <SubmitButton type="submit" value="Login" />
          <p>Don't have an account yet? <FormAnchor >Sign up!</FormAnchor></p>
        </Form>
      </Register>
    );
  }
}

export default RegisterForm;