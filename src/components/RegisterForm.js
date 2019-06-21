import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import '../App.css';
import firebase from '../config/FirestoreConfig';


const Register = styled.div`
  position: relative;
  border-radius: 2rem;
  margin: 1rem auto;
  text-align: center;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
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

class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      lastname: '',
      city: '',
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister = (e) => {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    //Firebase function to create a new user in the registration area, with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function failure(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + "- Oh no, something went wrong :( " + errorMessage);
    });

    firebase.auth().onAuthStateChanged((user) => {
    //If my new user is logged in (which is true, because after registration it logs in automatically)
      if (user) {
        //I save the uid in a variable
        let uid = user.uid;
        //I call my save data function and send the uid
        this.saveData(uid, email, password);
      }
    })
  }

  saveData = (uid, email, password) => {
    let user = {
      nombre: this.state.name,
      apellido: this.state.lastname,
      ciudad: this.state.city,
      email: email,
      password: password,
    }
    //Dentro de mi rama de usuarios, guardo el usuario con su uid
    firebase.database().ref("users/" + uid).set(user);
  }

  render() {
    return (
      <Register className="register">
        <Form onSubmit={this.handleSubmit}>
          <FormLogo src={Logo} />
          <FormLabel> Nombre </FormLabel> <FormInput onChange={this.handleChange} name="name"/>
          <FormLabel> Apellido </FormLabel> <FormInput onChange={this.handleChange} name="lastname"/>
          <FormLabel> Ciudad </FormLabel> <FormInput onChange={this.handleChange} name="city"/>
          <FormLabel> Correo electrónico </FormLabel> <FormInput onChange={this.handleChange} name="email"/>
          <FormLabel> Contraseña </FormLabel> <FormInput type="password" onChange={this.handleChange} name="password"/>
          <SubmitButton onClick={this.handleRegister} type="submit" value="Registrarse" />
          <p>¿Ya tienes cuenta? <FormAnchor onClick={this.props.handleCardChange} >¡Ingresa!</FormAnchor></p>
        </Form>
      </Register>
    );
  }
}

export default RegisterForm;
