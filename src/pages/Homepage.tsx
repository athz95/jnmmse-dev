//component imports
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BodyWrapper, EdwoBtn, MainWrapper } from '../components/commonStyles'
import Header from '../components/common/Header'

//image imports
import productCategoryBg from "../images/productCategoryBg.png"
import homepageABstract from "../images/homepageABstract.jpg"
import homepageLandingImg from "../images/homepageLandingImg.png"

import ContactDetails from '../components/common/ContactDetails';
import ProductEnquiry from '../components/ProductEnquiry';
import HomepageBox from '../components/HomepageBox';
import Spinner from '../components/common/Spinner';
import { client, urlFor } from '../client';
import { productCategoryQuery } from '../utils/data';
import GeneralMedicineIcon from '../components/icons/GeneralMedicineIcon';
import DentalProducts from '../components/icons/DentalProducts';
import InstrumentsIcon from '../components/icons/InstrumentsIcon';
import LabProducts from '../components/icons/LabProducts';
import HospitalFurniture from '../components/icons/HospitalFurniture';
import OtherProducts from '../components/icons/OtherProducts';
import WhatsappIco from '../components/WhatsAppIco'
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanySchema from '../components/common/CompanySchema'


const structuredData = () => {
  const data = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "JNM Medical Surgical Equipment Trading LLC",
      "description": "Supplier of laboratory, medical, and surgical equipment, pharmaceutical products, and disposables in Dubai, UAE. Serving Government and Private Healthcare sectors.",
      "url": "https://www.jnmmse.com",
      "telephone": "+971 547720629",
      "email": "info@jnmmse.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat 204, Ruqaya Saeed",
        "addressLocality": "Hor Al Anz",
        "addressRegion": "Dubai",
        "postalCode": "125212",
        "addressCountry": "United Arab Emirates",
        "openingHours": "Mo-Fr 08:00-17:00",
      },
      "itemListElement":
          [
              {
                  "@type": "ListItem",
                  "item": "https://www.jnmmse.com",
                  "name": "Homepage",
                  "position": 1
              },
            ]
  }

  return JSON.stringify(data)
}


const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    client.fetch(productCategoryQuery).then((data) => {
        // Reverse the order of the data array
        const reversedData = data.slice().reverse();
        setCategoriesData(reversedData);
        setLoading(false)
    }).catch((err) => console.error(err));
  },[])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
    };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leading Medical Equipment Supplier in Dubai, UAE | JNM Medical Trading LLC</title>
        <meta name="description" content="JNM Medical Trading LLC is your trusted source for laboratory, medical, surgical equipment, pharmaceuticals, and disposables in Dubai, UAE. Serving both Government and Private Healthcare sectors" />
        <meta name="keywords" content="Medical equipment supplier Dubai, Surgical equipment supplier UAE, Pharmaceutical products Dubai, Laboratory equipment distributor UAE"></meta>
     </Helmet>
     <CompanySchema />

    

    <MainWrapper>
      <Header />
      <BodyWrapper>
        <HomepageLandingWrapper  data-aos="fade-in">
          <LandingLeft>
            <LeftImageText>
              <LandingTextWrap>
                <h6>
                       Your Trusted Medical Equipment Supplier
                </h6>
            
                <a href="https://drive.google.com/drive/folders/1UhIVZFUA3LfYnLd0zH-EpylqefA6ju73"><EdwoBtn>Browse Catalog</EdwoBtn></a>
              </LandingTextWrap>
            </LeftImageText>
            <ProductEnquiryWrapper>
               <ProductEnquiry />
            </ProductEnquiryWrapper>
          </LandingLeft>
          <LandingRight>
            <img src={homepageLandingImg} alt="logo" />
          </LandingRight>
        </HomepageLandingWrapper>
        <HomepageSecondaryWrapper>
             <HomepageBoxRight>
               <HomepageBox boxTitle='Affordable Pricing' boxDesc='We Guarantee the lowest pricing without industry standard markups'/>
               <HomepageBox boxTitle='Original Products' boxDesc='All products sourced are from our own factories and facilities to ensure the highest quality'/>
             </HomepageBoxRight>
        </HomepageSecondaryWrapper>

        <ProductSectionWrapper>
          <ProductCategoriesHead>
             <h3>Product Categories</h3>
             <h6><NavLink to={"/products"}> See All</NavLink></h6>
          </ProductCategoriesHead>
       
            <ProductsRow>
            {loading ? <Spinner /> :
            <>
                <Slider {...settings}>
                  {categoriesData.map((category:any, index) => 
                        <ProductCategoryRound key={index}>
                          <NavLink to={`/products/${category.title}`}>
                            <div className='imgWrap'>
                                <img src={category.image ? urlFor(category.image)?.width(250)?.url() : ""} alt="" /> 
                            </div>
                          </NavLink>
                            
                            <NavLink to={`/products/${category.title}`} key={category.title}>{category.title.replace(/-/g, ' ')}</NavLink>
                        </ProductCategoryRound>
                 )}
                </Slider>
            </>}
            </ProductsRow>
        </ProductSectionWrapper>

        <ProductCategorySection>
            <h3>Product Range</h3>
            <div className='product-range-wrap'>
              <ProductCategorySecLeft>
                <ProductCategoryList>
                <ProductCategoryBox>
                  <GeneralMedicineIcon />
                  <h5>General Medical Devices</h5>
                </ProductCategoryBox>

                <ProductCategoryBox>
                  <DentalProducts />
                  <h5>Dental Products</h5>
                </ProductCategoryBox>

                
                <ProductCategoryBox>
                  <InstrumentsIcon />
                  <h5>Consumables and Instruments</h5>
                </ProductCategoryBox>

                <ProductCategoryBox>
                  <LabProducts />
                  <h5>Laboratory Products</h5>
                </ProductCategoryBox>

                
                <ProductCategoryBox>
                  <HospitalFurniture />
                  <h5>Hospital Furniture</h5>
                </ProductCategoryBox>

                <ProductCategoryBox>
                  <OtherProducts />
                  <h5>Other Products</h5>
                </ProductCategoryBox>
              </ProductCategoryList>
              </ProductCategorySecLeft>
 
            </div>
        </ProductCategorySection>

        <ContactDetailsWrapper>
          <ContactDetails />
        </ContactDetailsWrapper>

          <WhatsappIco />
      </BodyWrapper>
    </MainWrapper>

    </>
  )
}

export default Homepage

const HomepageLandingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 60vh;
  max-height: 84vh;
  background: rgb(224,236,255);
  background: linear-gradient(41deg, rgba(224,236,255,1) 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%);
  padding-top: 13rem;
  position: relative;


  @media screen and (max-width: 900px) {
      padding-top: 9rem;
      flex-direction: column;
      min-height: 100%;
      max-height: 100%;
      height: auto;
  }

  @media screen and (max-width: 600px) {
      min-height: 100%;
      max-height: auto;
      height: auto;
  }
`
const LandingLeft = styled.div`
   width: 50%;

   @media screen and (max-width: 900px) {
    width: 100%;
   }
`
const LandingRight = styled.div`
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
   }

  & img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    margin-top: 20px;
    backdrop-filter: blur(2px);

    @media screen and (max-width: 900px) {
      width: 65%;
      height: 40vh;
    }

    @media screen and (max-width: 576px) {
      width: 90%;
      height: auto;
    }
  }
`
const LeftImageText = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`


const LandingTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  & h6 {
       font-size: 45px;
       text-align: left;
       font-weight: 600;
       line-height: 50px;
       color: #ffffff;
       letter-spacing: 1px;
       text-transform: uppercase;
       margin-bottom: 10px;
       width: 85%;

       @media screen and (max-width: 1200px) {
            font-size: 23px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 20px;
            width: 100%;
        }

       @media screen and (max-width: 1200px) {
            margin-left: 10px;
            width: 100%;
        }
    }
`

export const TestimonialWrapper = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem auto;
`
export const ContactDetailsWrapper = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem auto;
`
const ProductEnquiryWrapper = styled.div`
     position: absolute;
     left: 10%;
     top: 75%;

     @media screen and (max-width: 900px) {
       position: static;
       margin: 20px 0px;
    }
`

const HomepageSecondaryWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 65vh;
  min-height: 50vh;
  background-color: #f5f1ed87;
  background-image: url(${homepageABstract});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
      padding: 40px 0px;
    }
`

const HomepageBoxRight = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    width: 70%;

    @media screen and (max-width: 1100px) {
      justify-content: flex-end;
      margin-right: 20px;
    }

    @media screen and (max-width: 900px) {
      justify-content: center;
      width: 100%;
      margin: 0px 20px;
    }

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }
`

export const ProductSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 10px;

  & h3 {
     font-size: 35px;
     color: #0097df;
     font-weight: 600;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 0.5px;
  }

  /* & p {
     font-size: 13px;
     color: #444242;
     font-weight: 500;
     text-align: center;
     margin-bottom: 10px;
  } */
`

export const ProductsRow = styled.div`
  width: 85% !important;
  height: auto;
  margin: 20px 0px;
  /* display: flex; 
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px; */
`

const ProductCategorySection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${productCategoryBg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
        height: auto;
        background-image: none;
    }


  & h3 {
    font-size: 35px;
     color: #0097df;
     font-weight: 600;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 0.5px;
     margin: 1rem 0;
  }

  & .product-range-wrap{
    display: flex;
    width: 100%;
  }
`

const ProductCategorySecLeft = styled.div`
  width: 50%;

  @media screen and (max-width: 767px) {
        width: 100%;
    }

  

  & img {
    width: 100%;
    height: 75vh;
    object-fit: contain;
  }
`
const ProductCategoryList = styled.div`
  width: 100%;
  margin: 0px auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`

const ProductCategoryBox = styled.div`
  width: 50%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  & svg {
    width: 50px;
    height: 50px;

    & path {
            fill: #0097df;
    }
  }

  & h5 {
    font-size: 20px;
    color: #000000;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
        padding: 0px;
        justify-content: center;
    }
`

const ProductCategoriesHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  align-items: center;

  & h6 {
     & a {
        text-decoration: none;
        font-size: 15px;
        color: #000000;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
        letter-spacing: 0.5px;
        margin: 1rem 0;
        cursor: pointer;
     }
     & :hover{
          color: #323030;
          text-decoration: underline;
        }
  }

  & h3 {
    font-size: 30px;
     color: #0097df;
     font-weight: 600;
     text-align: center;
     text-transform: capitalize;
     letter-spacing: 0.5px;
     margin: 1rem 0;

     @media screen and (max-width: 767px) {
        font-size: 23px;
    }
  }
`

const ProductCategoryRound = styled.div`
  /* width: 20% !important; */
  height: auto;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;


  & img {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }

  & .imgWrap{
      width: 100px;
      height: 100px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      border: 1px solid darkgray;
  }

  & a {
    text-decoration: none;
    color: #323030;
    font-weight: 500;
    font-size: 18px;
  }

`