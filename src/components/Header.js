import React from "react";
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const NavMenus = styled.div `
  display: flex;
  flex-direction: row;
  height: 77px;
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
`;

const NavBrand = styled.div `
  height: auto;
`;

const NavBar = styled.nav `
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
`;

const BrandLogo = styled.a `
  display: block;
  background-image: url("https://i.postimg.cc/BQVWWMdQ/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
`;

class Header extends React.Component{
  render(){
    return (
     <NavBar>
       <NavMenus>
         <NavBrand>
           <BrandLogo href="/home" />
         </NavBrand>
       </NavMenus>
     </NavBar>
    );
  }
}

  export default Header;
