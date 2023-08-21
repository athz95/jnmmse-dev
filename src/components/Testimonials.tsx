import React from 'react'
import styled  from 'styled-components';
import { EdwoBtnHeight, SecHead } from './commonStyles';
import TestimonialBg from "../images/homepage-testimonials-bg-line.png"
import QuotesImg from "../images/quotes.png"
import Testimonial1 from "../images/testimonials-1.png"
import Testimonial2 from "../images/testimonials-2.png"
import Testimonial3 from "../images/testimonials-3.png"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
    <TestimonialWrapper>
        <TestimonialHead>
            <SecHead>
            <h4>TESTIMONIALS</h4>
            <h6>What Our Clients Say <span>About Us</span></h6> 
            </SecHead>
        </TestimonialHead>
        <TestimonialSecsWrapper>
            {/* <TestimonialSecs> */}
            <Slider {...settings}>
                <TestimonialSec>
                    <img src={QuotesImg} alt="qoutes" className='quotes'/>
                    <img src={Testimonial1} alt="testimonial-dp" className='testimonial-dp'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                    </p>
                    <h4>Arun Vijay</h4>
                    <h6>Student</h6>
                </TestimonialSec>
                <TestimonialSec>
                    <img src={QuotesImg} alt="qoutes" className='quotes'/>
                    <img src={Testimonial2} alt="testimonial-dp" className='testimonial-dp'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                    </p>
                    <h4>Priyanka Mohan</h4>
                    <h6>Student</h6>
                </TestimonialSec>
                <TestimonialSec>
                    <img src={QuotesImg} alt="qoutes" className='quotes'/>
                    <img src={Testimonial3} alt="testimonial-dp" className='testimonial-dp'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                    </p>
                    <h4>Avinas Narayan</h4>
                    <h6>Designer</h6>
                </TestimonialSec>
                <TestimonialSec>
                    <img src={QuotesImg} alt="qoutes" className='quotes'/>
                    <img src={Testimonial3} alt="testimonial-dp" className='testimonial-dp'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                    </p>
                    <h4>Avinas Narayan</h4>
                    <h6>Designer</h6>
                </TestimonialSec>
                <TestimonialSec>
                    <img src={QuotesImg} alt="qoutes" className='quotes'/>
                    <img src={Testimonial3} alt="testimonial-dp" className='testimonial-dp'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                    </p>
                    <h4>Avinas Narayan</h4>
                    <h6>Designer</h6>
                </TestimonialSec>
                </Slider>
            {/* </TestimonialSecs> */}
        </TestimonialSecsWrapper>
    </TestimonialWrapper>
  )
}

export default Testimonials

const TestimonialWrapper = styled.div`
     width:100%;
     margin: 0px;
`
const TestimonialHead = styled.div`
   width: 80%;
   display: flex;
   justify-content: space-between;
   height: auto;
   margin: 1rem auto;
`
const TestimonialSecsWrapper = styled.div`
    width: 98%;
    background-image: url(${TestimonialBg});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
`
const TestimonialSecs = styled.div`
    /* width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto; */
`
const TestimonialSec = styled.div`
    width: 70% !important;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 6px solid var(--unnamed-color-ffffff);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 30px #39A8DD42;
    border: 6px solid #FFFFFF;
    border-radius: 33px;
    opacity: 1;
    margin: 2rem auto;

    & .quotes {
        width: 30px;
        height: auto;
        object-fit: contain;
        margin: 1rem 0rem;
    }
    & .testimonial-dp {
        width: 100px;
        height: auto;
        object-fit: contain;
        margin: 1rem 0rem;
    }
    & p {
        font-size: 15px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 500;
        line-height: 25px;
        width: 90%;
        color: #63749A;
        margin: 15px 0px;
    }
    & h4 {
        font-size: 25px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 700;
        line-height: 25px;
        width: 90%;
        color: #002450;
        margin: 5px 0px;
    }
    & h6 {
        font-size: 15px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 500;
        line-height: 25px;
        width: 90%;
        color: #63749A;
        margin: 5px 0px;
    }
`