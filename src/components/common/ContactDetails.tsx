import { useEffect, useState } from 'react'
import styled  from 'styled-components';
import { SecHead } from '../commonStyles';
import contactMobile from "../../images/phone-footer.png"
import contactFacebook from "../../images/footer-facebook.png"
import contactInstagram from "../../images/footer-instagram.png"
import contactMessage from "../../images/footer-message.png"
import contactWhatsapp from "../../images/footer-whatsapp.png"
import contactLinkedin from "../../images/linkedinIcon.png"
import { client } from '../../client';
import { companyInfoQuery } from '../../utils/data';

interface companyDetails {
   address?: any;
   email?: any;
   mobile?: any;
   whatsappNumber: any;
}

const ContactDetails = () => {
   const [companyInfo, setCompanyInfo] = useState({} as companyDetails)


   useEffect(() => {
    client.fetch(companyInfoQuery).then((data) => {
      setCompanyInfo(data[0]);
    }).catch((err) => console.error(err));
  },[])

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
                      <p>{companyInfo?.address}</p>
                      
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Mobile</h6>
                  <ContactDetailsSubs>
                      <img src={contactMobile} alt="mobile" />
                      <p>{companyInfo?.mobile}</p>
                  </ContactDetailsSubs>
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Email</h6>
                  <ContactDetailsSubs>
                      <img src={contactMessage} alt="mail" />
                      <p>{companyInfo?.email}</p>
                  </ContactDetailsSubs>
                </ContactDetailsSec>
                <ContactDetailsSec>
                  <h6>Follow Us On</h6>
                  <ContactDetailsSubs>
                      <a href="https://www.facebook.com/profile.php?id=61550564621013"><img src={contactFacebook} alt="facebook" /></a>
                      <a href={`https://wa.me/${companyInfo?.whatsappNumber}?text=Hello`}><img src={contactWhatsapp} alt="whatsapp" /></a>
                      <img src={contactInstagram} alt="instagram" />
                      <a href="https://www.linkedin.com/in/jnm-mse-784618289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUnayTuDdSzWTxYZDBe9hjg%3D%3D"><img src={contactLinkedin} alt="linkedin" /></a>
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