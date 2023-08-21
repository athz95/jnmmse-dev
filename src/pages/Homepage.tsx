//component imports
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BodyWrapper, DescText, EdwoBtn, EdwoBtnHeight, MainWrapper, SecHead } from '../components/commonStyles'
import Header from '../components/Header'



//image imports
import LandingBanner from "../images/homepage-landing-doc.png";
import AboutUsBg1 from "../images/homepage-bg-color-2.png"
import AboutUsBg2 from "../images/homepage-bg-color.png"
import WhatWeDoBg from "../images/homepage-bg-colors.png"
import ProductCategoryDOc from "../images/ProductCategoryDOc.jpg"
import Testimonials from '../components/Testimonials';
import ContactDetails from '../components/ContactDetails';
import Footer from '../components/Footer';
import FooterHeader from '../components/FooterHeader';
import { Link } from 'react-router-dom';
import ProductEnquiry from '../components/ProductEnquiry';
import HomepageBox from '../components/HomepageBox';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { client } from '../client';
import { feedQuery } from '../utils/categoryData';
import GeneralMedicineIcon from '../components/icons/GeneralMedicineIcon';
import DentalProducts from '../components/icons/DentalProducts';
import InstrumentsIcon from '../components/icons/InstrumentsIcon';
import LabProducts from '../components/icons/LabProducts';
import HospitalFurniture from '../components/icons/HospitalFurniture';
import OtherProducts from '../components/icons/OtherProducts';


type productTypes = {
  _id?: string;
  destination?: string;
  image: any;
  title?: string;
}


const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setLoading(true);
    client.fetch(feedQuery).then((data) => {
        setProducts(data);
        setLoading(false);
    }).catch((err) => console.error(err));
}, []);



  return (
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
            
                <EdwoBtn>Browse Catalog</EdwoBtn>
              </LandingTextWrap>
            </LeftImageText>
            <ProductEnquiryWrapper>
               <ProductEnquiry />
            </ProductEnquiryWrapper>
          </LandingLeft>
          <LandingRight>
            <img src={LandingBanner} alt="logo" />
          </LandingRight>
        </HomepageLandingWrapper>
        <HomepageSecondaryWrapper>
             <HomepageBoxRight>
               <HomepageBox boxTitle='Affordable Pricing' boxDesc='We Guarantee the lowest pricing without industry standard markups'/>
               <HomepageBox boxTitle='Original Products' boxDesc='All products sourced are from our own factories and facilities to ensure the highest quality'/>
             </HomepageBoxRight>
        </HomepageSecondaryWrapper>


        <ProductCategorySection>
            <h3>Product Range</h3>
            <div className='product-range-wrap'>
              <ProductCategorySecLeft>
                <img src={ProductCategoryDOc} alt="" />
              </ProductCategorySecLeft>
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
            </div>
        </ProductCategorySection>


        <ProductSectionWrapper>
            <h3>Supply Catalog</h3>
            <p>Request a free sample from us today !</p>
            <ProductsRow>
            {loading ? <Spinner /> :
                        <>
                            {products.slice(0, 10).map((product: productTypes) => (
                                <Product
                                    key={product._id}
                                    productImage={product?.image?.asset?.url}
                                    productName={product.title}
                                    productUrl={product.destination}
                                />
                            ))
                            }
                        </>
              }
            </ProductsRow>
        </ProductSectionWrapper>


        
       

        {/* <TestimonialWrapper>
          <Testimonials />
        </TestimonialWrapper> */}


        <ContactDetailsWrapper>
          <ContactDetails />
        </ContactDetailsWrapper>

        <FooterHeader />

      </BodyWrapper>
    </MainWrapper>
  )
}

export default Homepage

const HomepageLandingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 60vh;
  max-height: 73vh;
  background: rgb(224,236,255);
  background: linear-gradient(41deg, rgba(224,236,255,1) 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%);
  padding-top: 13rem;
  position: relative;


  @media screen and (max-width: 900px) {
      padding-top: 9rem;
      flex-direction: column;
      min-height: 100%;
      max-height: auto;
      height: auto;
  }

  @media screen and (max-width: 600px) {
      min-height: 100%;
      max-height: auto;
      height: auto;
  }
`
const LandingLeft = styled.div`
   width: 60%;

   @media screen and (max-width: 900px) {
    width: 100%;
   }
`
const LandingRight = styled.div`
  width: 40%;

  @media screen and (max-width: 900px) {
    width: 100%;
   }

  & img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
    margin-top: 20px;
    backdrop-filter: blur(2px);

    @media screen and (max-width: 900px) {
      width: 100%;
      height: 60vh;
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
`

const HomepageSecondaryWrapper = styled.div`
  width: 100%;
  height: 65vh;
  background-color: #f5f1ed87;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HomepageBoxRight = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    width: 70%;
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

  & p {
     font-size: 13px;
     color: #444242;
     font-weight: 500;
     text-align: center;
     margin-bottom: 10px;
  }
`

export const ProductsRow = styled.div`
  width: 85%;
  height: auto;
  display: flex; 
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
`

const ProductCategorySection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
        height: auto;
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

  & img {
    width: 100%;
    height: 75vh;
    object-fit: contain;
  }
`
const ProductCategoryList = styled.div`
  width: 70%;
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
  /* flex-direction: column; */
  gap: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;   */
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
    text-align: center;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
    }
`