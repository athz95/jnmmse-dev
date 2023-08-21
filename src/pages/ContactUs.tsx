import React from 'react'
import styled from 'styled-components'
import { BackBtn, BodyWrapper, EdwoBtn, MainWrapper, SecHead } from '../components/commonStyles'
import ContactDetails from '../components/ContactDetails'
import Footer from "../components/Footer"
import Header from '../components/Header'
import { ContactDetailsWrapper } from './Homepage'
import { useNavigate } from 'react-router-dom'

//image imports
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import contactUsDoc from "../images/contactUsDoc.png"
// import ContactUuRightBg from "../images/contact-us-right-bg2.png"
import FooterHeader from "../components/FooterHeader"


type Props = {}

const ContactUs = (props: Props) => {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <Header />
            <BodyWrapper>
                <AboutLandingWrapper>

                    <AboutLandingRight>
                        <SecHead>
                            <h4>Contact <span>US</span></h4>
                            <h6>Wanna Know more details ?</h6>
                        </SecHead>
                        <p>
                            Are you ready to elevate your healthcare facility's capabilities? Reach out to us today to discuss your medical equipment needs. Join us on our journey to redefine medical equipment standards in the Middle East. Experience the reliability, quality, and innovation that define JNM Medical Surgical Equipment Trading LLC.
                        </p>
                        <img src={contactUsDoc} alt="contact" />
                    </AboutLandingRight>
                    <AboutLandingLeft>

                        <ContactUsForm>
                            <ContactUsFormSec>
                                <input type="text" placeholder='Full Name *' />
                            </ContactUsFormSec>
                            <ContactUsFormSec>
                                <input type="text" placeholder='Mobile Number *' />
                            </ContactUsFormSec>

                            <ContactUsFormSec>
                                <input type="text" placeholder='Email ID' />

                            </ContactUsFormSec>
                            <ContactUsFormSec>
                                <input type="text" placeholder='What are you doing?' />
                            </ContactUsFormSec>
                            <EdwoBtn style={{ marginTop: '1rem' }}>Submit</EdwoBtn>
                        </ContactUsForm>

                    </AboutLandingLeft>
                </AboutLandingWrapper>
                <ContactDetailsWrapper>
                    <ContactDetails />
                </ContactDetailsWrapper>
                <FooterHeader />
            </BodyWrapper>
        </MainWrapper>
    )
}

export default ContactUs


const AboutLandingWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        min-height: 82vh;
        max-height: 95vh;
        background: rgb(224,236,255);
        background: linear-gradient(41deg, rgba(224,236,255,1) 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%);
        padding: 12rem 0rem 0rem 0rem;

        @media screen and (max-width: 767px) {
            flex-direction: column;
            height: auto;
            min-height: auto;
            max-height: fit-content;
            padding: 3rem 0rem 0rem 0rem;
        }
      
        & p {
            font-size: 15px;
            text-align: left;
            text-transform: capitalize;
            font-weight: 400;
            line-height: 20px;
            width: 60%;
            color: #ffffff;
            margin: 10px 0px 30px 0px;
            }
`
const AboutLandingLeft = styled.div`
    width: 40%;
    padding: 0rem 0rem;

    @media screen and (max-width: 767px) {
        width: 80%;
        padding: 0rem 0rem;
    }
`
const AboutLandingRight = styled.div`
    width: 40%;
    padding: 0rem 0rem;

    & img {
            width: 100%;
            height: auto;
            object-fit: contain;

            @media screen and (max-width: 767px) {
                height: auto;
                padding-top: 2rem;
            }
        }
    
    @media screen and (max-width: 767px) {
        width: 80%;
    }
`
const ContactUsForm = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;   
    border-radius: 10px;
    padding: 20px;
`
const ContactUsFormSec = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 80%;

    & input[type=text] {
        border: 4px solid var(--unnamed-color-ffffff);
        background-color: transparent;
        box-shadow: 0px 6px 30px #39A8DD26;
        border: 1px solid #ffffff77;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        width: 100%;
        margin: 5px;
        padding: 5px 10px;
        height: 50px;
        color: #000000 !important;
        font-size: 15px;
        outline: none;

        & :focus {
            outline: 2px solid black;
            border: 2px solid black;
        }
        &::placeholder{
            color: #ffffff !important;
        }
    }
    & select {
        border: 4px solid var(--unnamed-color-ffffff);
        background-color: transparent;
        box-shadow: 0px 6px 30px #39A8DD26;
        border: 1px solid #ffffff77;
        border-radius: 10px;
        opacity: 1;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        width: 43%;
        margin: 5px;
        padding: 5px 10px;
        height: 50px;
        /* font-family: 'Inter'; */
        color: #000000;
        font-size: 15px;
        outline: none;

        @media screen and (max-width: 767px) {
            width: 47%;
        }
    }
`