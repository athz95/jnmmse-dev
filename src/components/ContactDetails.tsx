import React from 'react'
import styled  from 'styled-components';
import { SecHead } from './commonStyles';
import contactMobile from "../images/phone-footer.png"
import contactFacebook from "../images/footer-facebook.png"
import contactInstagram from "../images/footer-instagram.png"
import contactMessage from "../images/footer-message.png"
import contactTwitter from "../images/footer-twitter.png"
import contactWhatsapp from "../images/footer-whatsapp.png"

type Props = {}

const ContactDetails = (props: Props) => {
  return (
    <ContactDetailsWrapper>
        <ContactDetailsLeft>
            <SecHead>
                <h4>CONTACT</h4>
                <h6>Where You Can Find <span>Us</span></h6> 
            </SecHead>
            <ContactDetailsSecs>
                <ContactDetailsSec>
                      <h6>Address</h6>
                      <p>JNM Medical Surgical Equipment Trading LLC <br/> Flat 204, Ruqaya Saeed, <br /> Hor Al Anz- Dubai</p>
                      
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Mobile</h6>
                  <ContactDetailsSubs>
                      <img src={contactMobile} alt="mobile" />
                      <p>+971 547720629</p>
                  </ContactDetailsSubs>
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Email</h6>
                  <ContactDetailsSubs>
                      <img src={contactMessage} alt="mail" />
                      <p>info@jnmmse.com</p>
                  </ContactDetailsSubs>
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Follow Us On</h6>
                  <ContactDetailsSubs>
                      <img src={contactFacebook} alt="facebook" />
                      <img src={contactWhatsapp} alt="whatsapp" />
                      <img src={contactInstagram} alt="instagram" />
                      <img src={contactTwitter} alt="twitter" />
                  </ContactDetailsSubs>
                </ContactDetailsSec>
            </ContactDetailsSecs>
        </ContactDetailsLeft>
        <ContactDetailsRight>
           <iframe src="https://www.google.com/maps/embed/v1/place?q=Hor+Al+Anz+-+Dubai+-+United+Arab+Emirates&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" title="maps" width="100%" height="450" style={{border:"0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </ContactDetailsRight>
    </ContactDetailsWrapper>
  )
}

export default ContactDetails

const ContactDetailsWrapper = styled.div`
   width: 80%;
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 900px) {
      flex-direction: column;
    }
`
const ContactDetailsLeft = styled.div`
   width: 40%;

   @media screen and (max-width: 900px) {
      width: 100%;
    }
`
const ContactDetailsRight = styled.div`
    width: 60%;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
`
const ContactDetailsSecs = styled.div`
     display:flex;
     flex-direction: column;
     align-items: center;
     width: 75%;
     
     @media screen and (max-width: 900px) {
      width: 100%;
    }
`
const ContactDetailsSec = styled.div`
     display:flex;
     flex-direction: column;
     justify-content: center;
     margin: 0.5rem 0px;
     width: 100%;
     
     & h6 {
        font-size: 15px;
        text-align: left;
        font-weight: 500;
        line-height: 25px;
        width: 30%;
        color: #63749A;
        margin: 0px 0px;
     }
     & p {
        font-size: 20px;
        text-align: left;
        font-weight: 700;
        line-height: 25px;
        width: 70%;
        color: #002450;
        margin: 5px 0px;
     }
`
const ContactDetailsSubs = styled.div`
     display: flex;
     margin: 10px 0px;

     & img {
        width: 40px;
        height: auto;
        object-fit: contain;
        margin: 0px 5px;
     }
     & p {
        font-size: 20px;
        text-align: left;
        font-weight: 700;
        line-height: 25px;
        width: 70%;
        color: #002450;
        margin: 5px 10px;
     }
`