import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import '../App.css';
import firebase from '../config/FirestoreConfig';

const Login = styled.div`
  position: relative;
  border-radius: 2rem;
  margin: 1rem auto;
  text-align: center;
`;

const Form = styled.form`
  padding: 0;
  text-align: center;
`;

const FormLabel = styled.label`
  margin: auto;
  text-align: center;
`;

const FormInput = styled.input`
  text-align: center;
  font-family: inherit;
  display: block;
  font-size: 0.9rem;
  background-color: #A7EEA8;
  border-radius: 0.5rem;
  margin: 0.5rem auto;
  padding: 0.1rem;
`;

const FormAnchor = styled.button`
  border: none;
  background: none;
  color: #69D5B5;
  text-decoration: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
`;

const FormLogo = styled.img`
  max-width: 80vw;
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

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Login >
        <Form className="login">
          <FormLogo src={Logo} />
          <FormLabel> Correo electrónico </FormLabel>
          <FormInput onChange={this.handleChange} name="email"/>
          <FormLabel> Contraseña </FormLabel>
          <FormInput onChange={this.handleChange} name="password" type="password" />
          <SubmitButton onClick={this.login} type="submit" value="Ingresar" />
          <p>¿Aún no tienes cuenta? <FormAnchor onClick={this.props.handleCardChange}>¡Regístrate!</FormAnchor></p>
        </Form>
      </Login>
    );
  }
}

export default LoginForm;
