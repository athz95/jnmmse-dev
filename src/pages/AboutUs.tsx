import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyWrapper, EdwoBtn, MainWrapper, SecHead } from '../components/commonStyles'
import ContactDetails from '../components/common/ContactDetails'
import Header from '../components/common/Header'
import { ContactDetailsWrapper} from './Homepage'
import AboutLeftBg from "../images/AboutUsLanding.png"
import AboutUs1c from "../images/about-us1c.png"
import AboutUs2c from "../images/about-us2c.png"
import AboutUs3c from "../images/about-us3c.png"
import { useEffect } from 'react'
import WhatsappIco from '../components/WhatsAppIco'
import { Helmet } from 'react-helmet'
import CompanySchema from '../components/common/CompanySchema'
import { companyBrochureQuery } from '../utils/data'
import { client } from '../client'

type Props = {}

const AboutUs = (props: Props) => {
    const [companyBrochure, setCompanyBrochure] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
        client.fetch(companyBrochureQuery).then((data) => {
            // Reverse the order of the data array
            setCompanyBrochure(data[0].brochure);
        }).catch((err) => console.error(err));
      },[])


    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About Us | Quality Medical Supplies and Pharmaceuticals | JNM Medical Trading Dubai</title>
            <meta name="description" content="Explore our wide range of medical supplies, pharmaceutical products, and surgical equipment. JNM Medical Trading LLC, a preferred choice in Dubai's healthcare industry" />
            <meta name="keywords" content="Private healthcare equipment Dubai, Government healthcare supplies UAE, Trusted medical equipment provider, Dubai healthcare solutions"></meta>
         </Helmet>
         <CompanySchema />
        


  
        <MainWrapper>
            <Header />
            <BodyWrapper>
                <AboutLandingWrapper>
                    <div className="aboutWidth">
                        <AboutLandingRight>
                            <SecHead>
                                <h2><span>ABOUT </span>Your Premier Medical Equipment Partner in the Middle East</h2>
                            </SecHead>
                            <p>
                                We are based in Dubai, United Arab Emirates, and actively involved in the business of supplying Laboratory, Medical and Surgical equipment, Pharmaceutical products and Disposables. <b>JNM MEDICAL SURGICAL EQUIPMENT TRADING LLC</b> has a strong client base both in the Government and Private Health Care sector.
                                <br />  <br />
                                Over the years we have progressively gained the attention and confidence of the main suppliers that senously take great care in the sales and services. Our goal is to expand <b>JNM MEDICAL SURGICAL EQUIPMENT TRADING LLC</b> to strategic and effective distributors to work with highly innovative products that meet the highest standards of quality which we were successful in the past. Thereby become the medical equipment provider of all of the Middle East.                        </p>
                                <a href={`${companyBrochure}?dl=`}><EdwoBtn>Browse Catalog</EdwoBtn></a>
                        </AboutLandingRight>
                        <AboutLandingLeft>
                            <img src={AboutLeftBg} alt="" />
                        </AboutLandingLeft>
                    </div>

                </AboutLandingWrapper>
                <AboutSecWrapper>
                    <AboutValues>
                        <img src={AboutUs3c} alt="values" />
                        <h5>Mission</h5>
                        <p>
                            At JNM Medical Surgical Equipment Trading LLC, our mission is clear: to provide healthcare providers with the cutting-edge tools they need to deliver the best possible patient care. We are dedicated to offering a comprehensive range of medical equipment that meets the highest standards of quality, safety, and efficiency.
                        </p>
                    </AboutValues>
                    <AboutValues>
                        <img src={AboutUs2c} alt="values" />
                        <h5>Vision</h5>
                        <p>Our vision extends beyond boundaries. We aim to not only maintain our status as a preferred supplier but also to expand our reach throughout the Middle East. By forging partnerships with strategic distributors and leveraging our expertise, we aspire to introduce highly innovative products that set new benchmarks for quality and utility.
                        </p>
                    </AboutValues>
                    <AboutValues>
                        <img src={AboutUs1c} alt="values" />
                        <h5>Passion</h5>
                        <p>
                            At JNM Medical Surgical Equipment Trading LLC, our work is driven by an unwavering passion for enhancing healthcare standards through excellence and innovation. Our journey began with a commitment to making a meaningful impact on patient care and medical practices in the Middle East.
                        </p>
                    </AboutValues>
                </AboutSecWrapper>


                <AboutUsThirdWrapper>
                    <h4>Why Choose Us? </h4>
                    <AboutUsImportanceWrap>
                        <AboutUsImportance>
                            <h5>Unrivaled Expertise</h5>
                            <p>
                                Backed by a team of industry experts, we possess a deep understanding of the unique needs and challenges faced by healthcare providers. Our knowledgeable staff is always ready to assist you in finding the perfect solutions for your specific requirements.
                            </p>
                        </AboutUsImportance>

                        <AboutUsImportance>
                            <h5>Quality Assurance</h5>
                            <p>
                                We believe that quality is paramount when it comes to medical equipment. Each product in our inventory undergoes rigorous testing and inspection to ensure it meets and exceeds industry standards.
                            </p>
                        </AboutUsImportance>

                        <AboutUsImportance>
                            <h5>Innovation</h5>
                            <p>
                                In the rapidly evolving world of healthcare technology, we strive to stay ahead of the curve. Our dedication to innovation means we offer the latest advancements in medical equipment, enabling you to offer the most advanced care to your patients.
                            </p>
                        </AboutUsImportance>

                        <AboutUsImportance>
                            <h5>Customized Solutions</h5>
                            <p>
                                We recognize that every healthcare facility is unique. Our team works closely with you to understand your needs and tailor solutions that align perfectly with your objectives.
                            </p>
                        </AboutUsImportance>

                        <AboutUsImportance>
                            <h5>Reliability</h5>
                            <p>
                                We understand the critical nature of medical equipment in your daily operations. That's why we emphasize reliability in every product we offer. You can trust our equipment to perform consistently and dependably.
                            </p>
                        </AboutUsImportance>

                        <AboutUsImportance>
                            <h5>Innovation and Excellence</h5>
                            <p>
                                We pride ourselves on staying ahead of the curve by sourcing and providing innovative products that contribute to advancing healthcare practices.
                            </p>
                        </AboutUsImportance>
                    </AboutUsImportanceWrap>

                </AboutUsThirdWrapper>

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

export default AboutUs

const AboutLandingWrapper = styled.div`
        width: 100%;
        height: auto;
        background: rgb(224,236,255);
        background: linear-gradient(41deg, #9fc7ff 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%); 
        padding-top: 10rem;
        margin: auto;

        & img {
            width: 100%;
            height: auto;
            object-fit: contain;

            @media screen and (max-width: 767px) {
                height: auto;
            }
        }

        & .aboutWidth{
            width: 85%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin: auto;

            @media screen and (max-width: 999px) {
                flex-direction: column;
                max-height: 100%;
                max-width: 100%;
                align-items: flex-start;
            }
        }
`
const AboutLandingLeft = styled.div`
    width: 48%;


    @media screen and (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
const AboutLandingRight = styled.div`
    width: 50%;
    margin-left: 2rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 999px) {
       width: 75%;
    }

    @media screen and (max-width: 767px) {
        width: 80%;
    }

    & p {
       font-size: 14px;
       text-align: left;
       font-weight: 400;
       line-height: 23px !important;
       text-align: justify;
       color: #ffffff;
       margin: 25px 0px 30px 0px;
    }
`
const AboutSecWrapper = styled.div`
        width: 80%;
        height: auto;
        margin: 5rem auto;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 15px;
            margin: 2rem auto;
        }
`
const AboutValues = styled.div`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    border: 6px solid var(--unnamed-color-ffffff);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 30px #39A8DD42;
    border: 6px solid #FFFFFF;
    border-radius: 33px;
    opacity: 1;
    width: 30%;
    text-align: center;
    padding: 1rem;
    margin:0rem 1rem ;

    @media screen and (max-width: 767px) {
        width: auto;
    }

    & img {
       width: 50px;
       height: 100px;
       object-fit: contain;
    }
    & p {
        font-size: 15px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 400;
        line-height: 25px;
        color: #63749A;
        margin: 10px 0px 30px 0px;
    }
    & h5 {
        font-size: 25px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 700;
        line-height: 20px;
        color: #002450;
        margin: 2rem 0rem 1rem 0rem;
    }
`

const AboutUsThirdWrapper = styled.div`
    width: 80%;
    height: auto;
    margin: 5rem auto;
    background-color: #e4edf6;
    padding: 20px 10px;

    @media screen and (max-width: 767px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & h4 {
        font-size: 35px;
        text-align: center;
        color: #0097df;
    }
`
const AboutUsImportance = styled.div`
  width: 40%;
  height: 25vh;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0px 6px 30px #39A8DD42;
  border-radius: 5px;
  background: #ffffff;

  @media screen and (max-width: 767px) {
      width: auto;
      padding: 20px;
      height: auto;
   }

  & p {
        font-size: 15px;
        text-align: center;
        font-weight: 400;
        line-height: 25px;
        color: #63749A;
    }
    & h5 {
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        line-height: 20px;
        color: #002450;
    }
`
const AboutUsImportanceWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top:1.5rem;

    @media screen and (max-width: 767px) {
        width: 80%;
    }
`