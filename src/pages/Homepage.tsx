//component imports
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BodyWrapper, MainWrapper } from '../components/commonStyles'
import Header from '../components/common/Header'

//image imports
import productCategoryBg from "../images/productCategoryBg.png"
import homepageABstract from "../images/homepageABstract.jpg"
// import homepageLandingImg from "../images/homepageLandingImg.png"

import ContactDetails from '../components/common/ContactDetails';
import ProductEnquiry from '../components/ProductEnquiry';
import HomepageBox from '../components/HomepageBox';
import Spinner from '../components/common/Spinner';
import { client, urlFor } from '../client';
import { homepageBanners, productCategoryQuery } from '../utils/data';
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


const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([])
  const [desktopBanners, setDesktopBanners] = useState([])
  const [mobileBanners, setMobileBanners] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    client.fetch(productCategoryQuery).then((data) => {
      // Reverse the order of the data array
      const reversedData = data.slice().reverse();
      setCategoriesData(reversedData);
      setLoading(false)
    }).catch((err) => console.error(err));
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    client.fetch(homepageBanners).then((data) => {
      // Reverse the order of the data array
      const reversedData = data.slice().reverse();
      const desktopBannersData = reversedData.filter(banner => banner.type.includes('desktop'));
      const mobileBannersData = reversedData.filter(banner => banner.type.includes('mobile'))
      setDesktopBanners(desktopBannersData);
      setMobileBanners(mobileBannersData);
      setLoading(false)
    }).catch((err) => console.error(err));
  }, [])

  const productSettings = {
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

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <title>JNM Medical Trading LLC | Leading Medical Equipment Supplier in Dubai, UAE</title>
        <meta name="description" content="JNM Medical Trading LLC is your trusted source for laboratory, medical, surgical equipment, pharmaceuticals, and disposables in Dubai, UAE. Serving both Government and Private Healthcare sectors" />
        <meta name="keywords" content="Medical equipment supplier Dubai, Surgical equipment supplier UAE, Pharmaceutical products Dubai, Laboratory equipment distributor UAE"></meta>
      </Helmet>
      <CompanySchema />



      <MainWrapper>
        <Header />
        <BodyWrapper>
          {/* <HomepageLandingWrapper  data-aos="fade-in">
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
        </HomepageLandingWrapper> */}
          <HomepageLandingBanner className='desktopBannerSection'>
            <Slider {...bannerSettings}>
              {desktopBanners.map((banner: any, index) =>
                <NavLink to={`${banner.redirectionLink}`} key={index}>
                  <div className='bannerImgWrap'>
                    <img src={banner.image ? urlFor(banner.image)?.url() : ""} alt="" />
                  </div>
                </NavLink>
              )}
            </Slider>
          </HomepageLandingBanner>

          <HomepageLandingBanner className='mobileBannerSection'>
            <Slider {...bannerSettings}>
              {mobileBanners.map((banner: any, index) =>
                <NavLink to={`${banner.redirectionLink}`} key={index}>
                  <div className='bannerImgWrap'>
                    <img src={banner.image ? urlFor(banner.image)?.url() : ""} alt="" />
                  </div>
                </NavLink>
              )}
            </Slider>
          </HomepageLandingBanner>


          <HomepageSecondaryWrapper>
            <HomepageBoxRight>
              <HomepageBox boxTitle='Affordable Pricing' boxDesc='We Guarantee the lowest pricing without industry standard markups' />
              <HomepageBox boxTitle='Original Products' boxDesc='All products sourced are from our own factories and facilities to ensure the highest quality' />
            </HomepageBoxRight>
            <ProductEnquiryWrapper>
              <ProductEnquiry />
            </ProductEnquiryWrapper>

          </HomepageSecondaryWrapper>

          <ProductSectionWrapper>
            <ProductCategoriesHead>
              <h3>Product Categories</h3>
              <h6><NavLink to={"/products"}> See All</NavLink></h6>
            </ProductCategoriesHead>

            <ProductsRow>
              {loading ? <Spinner /> :
                <>
                  <Slider {...productSettings}>
                    {categoriesData.map((category: any, index) =>
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

// const HomepageLandingWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   width: 100%;
//   height: auto;
//   min-height: 60vh;
//   max-height: 84vh;
//   background: rgb(224,236,255);
//   background: linear-gradient(41deg, rgba(224,236,255,1) 0%, rgba(102,168,201,1) 48%, rgba(50,133,153,1) 100%);
//   padding-top: 13rem;
//   position: relative;


//   @media screen and (max-width: 900px) {
//       padding-top: 9rem;
//       flex-direction: column;
//       min-height: 100%;
//       max-height: 100%;
//       height: auto;
//   }

//   @media screen and (max-width: 600px) {
//       min-height: 100%;
//       max-height: auto;
//       height: auto;
//   }
// `
// const LandingLeft = styled.div`
//    width: 50%;

//    @media screen and (max-width: 900px) {
//     width: 100%;
//    }
// `
// const LandingRight = styled.div`
//   width: 50%;

//   @media screen and (max-width: 900px) {
//     width: 100%;
//    }

//   & img {
//     width: 100%;
//     height: 75vh;
//     object-fit: cover;
//     margin-top: 20px;
//     backdrop-filter: blur(2px);

//     @media screen and (max-width: 1250px) {
//       width: 100%;
//       height: 65vh;
//     }

//     @media screen and (max-width: 900px) {
//       width: 65%;
//       height: 40vh;
//     }

//     @media screen and (max-width: 576px) {
//       width: 90%;
//       height: auto;
//     }
//   }
// `
// const LeftImageText = styled.div`
//     display: flex;
//     width: 100%;
//     justify-content: center;
// `


// const LandingTextWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 60%;

//   @media screen and (max-width: 600px) {
//     width: 90%;
//   }

//   & h6 {
//        font-size: 45px;
//        text-align: left;
//        font-weight: 600;
//        line-height: 50px;
//        color: #ffffff;
//        letter-spacing: 1px;
//        text-transform: uppercase;
//        margin-bottom: 10px;
//        width: 85%;

//        @media screen and (max-width: 1300px) {
//             font-size: 30px;
//         }

//        @media screen and (max-width: 1200px) {
//             font-size: 25px;
//         }
//         @media screen and (max-width: 1000px) {
//             font-size: 23px;
//             width: 100%;
//         }

//        @media screen and (max-width: 1200px) {
//             margin-left: 10px;
//             width: 100%;
//         }
//     }
// `


export const ContactDetailsWrapper = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem auto 0rem auto;
`
const ProductEnquiryWrapper = styled.div`
      margin: 0em 2em;
      width: 40%;
      display: flex;
      justify-content: center;
     
     @media screen and (max-width: 900px) {
       position: static;
       margin: 20px 0px;
       width: 70%;
    }

    @media screen and (max-width: 600px) {
       position: static;
       margin: 20px 0px;
       width: 100%;
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
  justify-content: space-between;
  align-items: center;
  padding: 5em 0em;

    @media screen and (max-width: 768px) {
      padding: 40px 0px;
      flex-direction: column;
      height: auto;
      min-height: 100%;
      max-height: 100%;
      gap: 30px;
    }
`

const HomepageBoxRight = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 60%;

    @media screen and (max-width: 1100px) {
      justify-content: flex-end;
      margin-right: 20px;
    }

    @media screen and (max-width: 900px) {
      justify-content: center;
      width: 70%;
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

`

export const ProductsRow = styled.div`
  width: 85% !important;
  height: auto;
  margin: 20px 0px;

  .slick-prev:before {
    color: #0097df !important;
  }

  .slick-next:before{
    color: #0097df !important;
  }
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
    text-align: center;
  }
`

const HomepageLandingBanner = styled.div`
  width: 100%;
  height: auto;
  margin-top: 120px;

  & img {
    max-width: 100%;
  }

  .bannerImgWrap{
    & img {
      max-width: 100%;
      width: 100%;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 15px !important;
  }

  .slick-dots li button {
    cursor: pointer;
    color: #0097df;
}
.slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 2px;
    padding: 0;
    cursor: pointer;
}

@media screen and (max-width: 900px) {
     margin-top: 100px;
  }
`