import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import FooterHeader from './FooterHeader';


type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <FooterHeader />
      <FooterMainWrap>
          <FooterLeft>
             <p><Link to="/terms-and-privacy">Privacy</Link> | <Link to="/terms-and-privacy">Terms & Conditions</Link> </p>
          </FooterLeft> 
          <FooterRight>
             <p>ed.wo  © All Rights Reserved 2022</p>
          </FooterRight>
        </FooterMainWrap>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
    padding: 10px 0px;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

   & p {
    font-family: 'Mulish', sans-serif;
    font-size: 12px;
    color: white;
   }
`
const FooterMainWrap = styled.div`
  display:flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;

  
`
const FooterLeft = styled.div`
  width: 100%;
  display:flex;
 justify-content: flex-start;
    & p {
        font-size: 15px;
        text-align: left;
        /* font-family: 'Inter'; */
        font-weight: 500;
        line-height: 25px;
        color: #63749A;
        margin: 0px 10px;

        @media screen and (max-width: 600px) {
          font-size: 13px;
       }

        & a {
          text-decoration: none;
          color: #63749A;
        }
      }
`
const FooterRight = styled.div`
 width: 100%;
 display:flex;
 justify-content: flex-end;
   & p {
       font-size: 15px;
        text-align: left;
        /* font-family: 'Inter'; */
        font-weight: 500;
        line-height: 25px;
        color: #63749A;
        margin: 0px 0px;

        @media screen and (max-width: 600px) {
          font-size: 13px;
       }
  }
`