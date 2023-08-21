//components imports
import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
//image imports
import LogoImage from "../images/main-logo.png"
import LandingBg from "../images/homepage-bg.png"
import { EdwoBtn } from './commonStyles';

type Props = {}

const FooterHeader = (props: Props) => {
  return (
    <HeaderWrapper>
        <HeaderSubWrap>
           <HeaderSubLeft>
              <Link to="/"><Logo src={LogoImage}></Logo></Link>
           </HeaderSubLeft>
           <HeaderSubRight>
             <Link to="/"><HeaderLink>Home</HeaderLink></Link>
             <Link to="/about-us"><HeaderLink>About Us</HeaderLink></Link>
             <Link to="/courses"><HeaderLink>Products</HeaderLink></Link>
             <Link to="/contact-us"><EdwoBtn>Contact Us</EdwoBtn></Link>
           </HeaderSubRight>
        </HeaderSubWrap>
    </HeaderWrapper>
  )
}

export default FooterHeader

const HeaderWrapper = styled.div`
    width: 100%;
    position: sticky;
    top: 0px;
    z-index: 9999;
   background-color: white;
`
const HeaderSubLeft = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderSubWrap = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 10px 0px;
    margin: auto;
`
const Logo = styled.img`
    width: 200px;
    height: 95px;
    object-fit: contain;
`
const HeaderSubRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;

    @media screen and (max-width: 900px) {
      display: none; 
    }

    & a {
        text-decoration: none;

        :hover{
          color: #FF6766;
        }
    }
`
const HeaderLink = styled.a`
    font-family: 'Mulish', sans-serif;
    font-weight: 550;
    font-size: 15px;
    color: #002450;
    text-decoration: none;
    margin: 0px 15px;
`