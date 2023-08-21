import React from 'react'
import styled from 'styled-components'
import { BackBtn, BodyWrapper, EdwoBtn, MainWrapper, SecHead } from '../components/commonStyles'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ContactDetailsWrapper } from './Homepage'
import { useNavigate } from 'react-router-dom'

//image imports
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutColorBg from "../images/about-us-colors-bg.png" 
import ContactUuRightBg from "../images/contact-us-right-bg2.png"
import FooterHeader from '../components/FooterHeader'


type Props = {}

const TermsAndPrivacy = (props: Props) => {
    const navigate = useNavigate();


    return (
        <MainWrapper>
            <Header />
            <BodyWrapper>
            <BackBtn onClick={() => navigate(-1)}> 
                    <ArrowBackIcon /> 
                   <p> Back </p> 
                </BackBtn>
                <AboutLandingWrapper>
                    <AboutLandingLeft>
                         <h4>Privacy</h4>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                    </AboutLandingLeft>
                    <AboutLandingRight>
                        <h4>Terms & Conditions</h4>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. Lorem ipsum dolor sit amet, consectetur adipiscing nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                         </p>
                    </AboutLandingRight>
                </AboutLandingWrapper>
                <ContactDetailsWrapper>
                    <ContactDetails />
                </ContactDetailsWrapper>
                <Footer />
            </BodyWrapper>
        </MainWrapper>
    )
}

export default TermsAndPrivacy

const AboutLandingWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        min-height: 90vh;
        max-height: 100vh;
        background-image: url(${AboutColorBg});
        background-size: cover;
        background-position: inherit;
        background-repeat: no-repeat;
        padding: 5rem 0rem;
      
        & p {
        font-size: 15px;
        text-align: left;
        font-family: 'Inter';
        font-weight: 400;
        line-height: 20px;
        width: 70%;
        color: #63749A;
        margin: 10px 0px 30px 0px;
    }
    & h4 {
       font-size: 22px;
       text-align: left;
       font-family: 'Inter';
       font-weight: 700;
       color: #002450;
       line-height: 25px;
    }
`
const AboutLandingLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 5px solid white;
`
const AboutLandingRight = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
            width: 90%;
            height: 100vh;
            object-fit: contain;
        }
`
const ContactUsForm = styled.div`
    width: 100%;
`
const ContactUsFormSec = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    & input {
        border: 4px solid var(--unnamed-color-ffffff);
        background-color: transparent;
        box-shadow: 0px 6px 30px #39A8DD26;
        border: 4px solid #FFFFFF;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        width: 40%;
        margin: 5px;
        padding: 5px 10px;
        height: 50px;
        font-family: 'Inter';
        color: #63749A;
        font-size: 15px;
        outline: none;

        & :focus {
            outline: 2px solid black;
            border: 2px solid black;
        }
    }
    & select {
        border: 4px solid var(--unnamed-color-ffffff);
        background-color: transparent;
        box-shadow: 0px 6px 30px #39A8DD26;
        border: 4px solid #FFFFFF;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        width: 43%;
        margin: 5px;
        padding: 5px 10px;
        height: 50px;
        font-family: 'Inter';
        color: #63749A;
        font-size: 15px;
        outline: none;
    }
`