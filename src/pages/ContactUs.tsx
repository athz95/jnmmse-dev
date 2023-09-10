import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BodyWrapper, EdwoBtn, MainWrapper } from '../components/commonStyles'
import ContactDetails from '../components/common/ContactDetails'
import Header from '../components/common/Header'
import { ContactDetailsWrapper } from './Homepage'

//image imports
import contactUsDoc from "../images/contactUsDoc.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsappIco from '../components/WhatsAppIco'
import { Helmet } from 'react-helmet'
import CompanySchema from '../components/common/CompanySchema'



type Props = {}

const ContactUs = (props: Props) => {
    const [formData, setFormData] = useState({
        NAME: '',
        TELEPHONE: '',
        EMAIL: "",
        MESSAGE: ""
      });

      const handleChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const formEle:any = document.querySelector("form")

        const formData = new FormData(formEle)
    
        try {
          const response = await fetch("https://script.google.com/macros/s/AKfycbyR5-e9c8m43CfJR2qy001tL4IJR5sCTGJ3-jrIIQtC2XiMEbi3VNR7xCAQkyrdyeFy/exec", {
            method: 'POST',
            body: formData,
            redirect: 'follow', // Follow redirects (default)
          });

          if (response.status === 200) {
            toast.success("Thanks for contacting us! We will get in touch with you shortly!");
            // Reset the form
            setFormData({
                NAME: '',
                TELEPHONE: '',
                EMAIL: "",
                MESSAGE: ""
            });
          } else {
            toast.error('Oops !! Please try again in sometime');
          }
        } catch (error) {
            toast.error('Oops !! Please try again in sometime');
        }
      };

      useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Your Reliable Medical Equipment Partner in Dubai | JNM Trading LLC</title>
                <meta name="description" content="With a strong focus on quality and innovation, JNM Medical Trading LLC aims to become the leading medical equipment provider in the Middle East. Trust us for excellence." />
                <meta name="keywords" content="Private healthcare equipment Dubai, Government healthcare supplies UAE, Innovative medical products UAE, Dubai healthcare solutions"></meta>
            </Helmet>
            <CompanySchema />
     
            <MainWrapper>
                <Header />
                <BodyWrapper>
                <ToastContainer />
                    <AboutLandingWrapper>

                        <AboutLandingRight>  
                            <img src={contactUsDoc} alt="contact" />
                        </AboutLandingRight>
                        <AboutLandingLeft>
                            <p>
                                Are you ready to elevate your healthcare facility's capabilities? Reach out to us today to discuss your medical equipment needs. Join us on our journey to redefine medical equipment standards in the Middle East. Experience the reliability, quality, and innovation that define JNM Medical Surgical Equipment Trading LLC.
                            </p>
                            <ContactUsForm onSubmit={handleSubmit} className="form">
                                <ContactUsFormSec>
                                    <input type="text" placeholder="Person's name or Company Name *"  value={formData.NAME} name="NAME"  onChange={handleChange} />
                                </ContactUsFormSec>
                                <ContactUsFormSec>
                                    <input type="number" placeholder='Telephone *' value={formData.TELEPHONE} name="TELEPHONE"  onChange={handleChange} />
                                </ContactUsFormSec>

                                <ContactUsFormSec>
                                    <input type="email" placeholder='Enter your Email address' value={formData.EMAIL} name="EMAIL"  onChange={handleChange} />

                                </ContactUsFormSec>
                                <ContactUsFormSec>
                                    <input type="text" placeholder='Message' value={formData.MESSAGE} name="MESSAGE"   onChange={handleChange}/>
                                </ContactUsFormSec>
                                <EdwoBtn type="submit" style={{ marginTop: '1rem' }}>Submit</EdwoBtn>
                            </ContactUsForm>

                        </AboutLandingLeft>
                    </AboutLandingWrapper>
                    <ContactDetailsWrapper>
                        <ContactDetails />
                    </ContactDetailsWrapper>
                    {/* <FooterHeader /> */}
                    <WhatsappIco />
                </BodyWrapper>
            </MainWrapper>
        </>
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
            font-size: 14px;
            text-align: left;
            text-transform: capitalize;
            font-weight: 400;
            line-height: 23px;
            width: 100%;
            color: #ffffff;
            margin: 10px 0px 15px 0px;
            text-align: justify;
            }
`
const AboutLandingLeft = styled.div`
    width: 40%;
    padding: 0rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 767px) {
        width: 80%;
        padding: 0rem 0rem;
        margin-bottom: 20px;
    }
`
const AboutLandingRight = styled.div`
    width: 40%;
    padding: 0rem 0rem;


    & img {
            width: 100%;
            height: 85vh;
            object-fit: contain;

            @media screen and (max-width: 767px) {
                height: auto;
                padding-top: 5rem;
            }
        }
    
    @media screen and (max-width: 767px) {
        width: 80%;
    }
`
const ContactUsForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;    */
    border-radius: 10px;
    /* padding: 20px; */
`
const ContactUsFormSec = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }

    & input {
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