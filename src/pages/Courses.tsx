import React from 'react'
import styled from 'styled-components'
import { BackBtn, BodyWrapper, EdwoBtn, MainWrapper, SecHead } from '../components/commonStyles'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'


//image imports
import CoursesBg from "../images/courses-colors-bg.png"
import CoursesLanding from "../images/courses-background.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CousesSecondWrapperBg from "../images/courses-colors-long-bg.png"
import TrainingImg from "../images/training.png"
import SylabusImg from "../images/sylabus.png"
import Timing from "../images/timings.png"
import CousesSecondRightBg from "../images/couses-2-bg.png";
import OurCourses1 from "../images/courses-1.png"
import OurCourses2 from "../images/courses-2.png"
import OurCourses3 from "../images/courses-3.png"
import OurCourses4 from "../images/courses-4.png"
import OurCourses5 from "../images/courses-5.png"
import OurCourses6 from "../images/courses-6.png"
import OurCourses7 from "../images/courses-7.png"
import OurCourses8 from "../images/courses-8.png"
import { ContactDetailsWrapper, TestimonialWrapper } from './Homepage'
import Testimonials from '../components/Testimonials'
import ContactDetails from '../components/ContactDetails'
import FooterHeader from '../components/FooterHeader'


type Props = {}

const Courses = (props: Props) => {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <Header />
            <BodyWrapper>
                <BackBtn onClick={() => navigate(-1)}> 
                   <ArrowBackIcon /> 
                   <p> Back </p> 
                </BackBtn>
                <CoursesLandingWrapper>
                    <img src={CoursesLanding} alt="" />
                </CoursesLandingWrapper>
                <CoursesDesc>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuereLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
                    </p>
                    <EdwoBtn>Know More</EdwoBtn>
                </CoursesDesc>

                <CoursesSecondWrapper>
                   <WhatWeDoBox>
                        <WhatWeDoBoxLeft>
                        <SecHead>
                            <h4>Why <span>Us</span></h4>
                            <h6>Why Should You Learn With </h6>
                            <p> Ed <span> .Wo</span></p>
                        </SecHead>
            
                        <WhatWeDoSecs>
                            <WhatWeDoSec>
                            <SecIconWrap>
                                <img src={TrainingImg} alt="" />
                            </SecIconWrap>
                            <SectionTextWrap>
                                <h6>One-On-One Training</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisi sed sollicitudin pellentesque. Nunc posuere purus aliquam. Ut aliquet tristique nisl                                </p>
                            </SectionTextWrap>
                            </WhatWeDoSec>
                            <WhatWeDoSec>
                            <SecIconWrap>
                               <img src={SylabusImg} alt="" />
                            </SecIconWrap>
                            <SectionTextWrap>
                                <h6>Customised Sylubus</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisi sed sollicitudin pellentesque. Nunc posuere purus aliquam. Ut aliquet tristique nisl                                </p>
                             </SectionTextWrap>
                            </WhatWeDoSec>
                            <WhatWeDoSec>
                            <SecIconWrap>
                               <img src={Timing} alt="" />
                            </SecIconWrap>
                            <SectionTextWrap>
                                <h6>Flexible Timing</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisi sed sollicitudin pellentesque. Nunc posuere purus aliquam. Ut aliquet tristique nisl                                </p>
                             </SectionTextWrap>
                            </WhatWeDoSec>
                        </WhatWeDoSecs>
                        </WhatWeDoBoxLeft>
                        <WhatWeDoBoxRight>
                        <img src={CousesSecondRightBg} alt="person" className='person-bg' />
                        {/* <img src={WhatWeDoBg3} alt="phone" className='mobile-bg' /> */}
                        </WhatWeDoBoxRight>
                    </WhatWeDoBox>

                    <OurCoursesWrapper>
                        <CoursesHead>
                        <SecHead>
                            <h4>our <span>courses</span></h4>
                            <h6>Most Popular Course We <span>Offer's</span></h6>
                        </SecHead>
                        </CoursesHead>
                        <OurCoursesSecs>
                        <OurCourseSec>
                            <img src={OurCourses8} alt="courses" />
                            <h3>Spoken <span>English</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses2} alt="courses" />
                            <h3>Business <span>English</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses3} alt="courses" />
                            <h3>English for competitive <span>exams</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses4} alt="courses" /> 
                            <h3>Spoken<span>Hindi</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses5} alt="courses" />
                            <h3>Public <span>Speaking</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses1} alt="courses" />
                            <h3>Skill <span>Development</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses7} alt="courses" />
                            <h3>Interview<span>Training</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>

                        <OurCourseSec>
                            <img src={OurCourses6} alt="courses" />
                            <h3>Resume<span>Making</span></h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetr adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliq uet tristique nisl vitae volutpat. Nulla al iquet porttitor venenatis. Donec a duiet dui fringilla consectetur id nec massa. Aliquamerat volutpat. Sed utdui utlacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.t.
                            </p>
                            <EdwoBtn>Know More</EdwoBtn>
                        </OurCourseSec>
                        </OurCoursesSecs>
                    </OurCoursesWrapper>
                </CoursesSecondWrapper>

                <TestimonialWrapper>
                    <Testimonials />
                </TestimonialWrapper>

                <ContactDetailsWrapper>
                    <ContactDetails />
                </ContactDetailsWrapper>
                <FooterHeader />
            </BodyWrapper>
        </MainWrapper>
    )
}

export default Courses

const CoursesLandingWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        min-height: 90vh;
        max-height: 100vh;
        background-image: url(${CoursesBg});
        background-size: cover;
        background-position: inherit;
        background-repeat: no-repeat;

        @media screen and (max-width: 900px) {
            min-height: 90vh;
            max-height: 100vh;
        }

        @media screen and (max-width: 576px) {
            min-height: 60vh;
            max-height: auto;
        }

        @media screen and (max-width: 400px) {
            min-height: 50vh;
            max-height: auto;
        }

        & img {
            width: 90%;
            height: 100vh;
            object-fit: contain;

            @media screen and (max-width: 576px) {
                height: auto;
            }
        }
`
const CoursesDesc = styled.div`
   display: flex;
   width: 80%;
   flex-direction: column;
   align-items: center;
   margin: 2rem auto;

   & p {
       font-size: 15px;
       text-align: center;
       font-family: 'Inter';
       font-weight: 400;
       line-height: 20px;
       color: #63749A;
       margin: 10px 0px;
   }
`

const CoursesSecondWrapper = styled.div`
   width: 100%;
   height: auto;
   background-image: url(${CousesSecondWrapperBg});
   background-size: cover;
   background-position: inherit;
   background-repeat: no-repeat;
   position: relative;
`

const WhatWeDoBox = styled.div`
    border: 6px solid var(--unnamed-color-ffffff);
    box-shadow: 0px 6px 30px #39A8DD26;
    border: 6px solid #FFFFFF;
    border-radius: 52px;
    opacity: 1;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    height: auto;
    width: 90%;
    margin: 5rem auto;
    display: flex;
    padding: 2rem;

   

    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 70%;
  }
`
const WhatWeDoBoxLeft = styled.div`
   width: 50%;
   padding: 2rem 0rem 0rem 5rem;

   @media screen and (max-width: 900px) {
       width: 100%;
       padding: 2rem 0rem 0rem 0rem;
    }

   & > p {
        font-size: 15px;
        text-align: left;
        font-family: 'Inter';
        font-weight: 500;
        line-height: 25px;
        width: 80%;
        color: #63749A;
        margin: 20px 0px;
    }
`
const WhatWeDoBoxRight = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
       width: 100%;
    }

   .person-bg {
    width: 80%;
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
  }
  .mobile-bg { 
      width: 30%;
      height: auto;
      object-fit: contain;
      position: absolute;
      right: -3%;
  }
`
const WhatWeDoSecs = styled.div`
   display: flex;
   flex-direction: column;
   margin: 2rem 0rem;
`
const WhatWeDoSec = styled.div`
  width: auto;
  max-width: 70%;
  height: auto;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0rem;
  position: relative;

  @media screen and (max-width: 900px) {
      max-width: 90%;
      flex-direction: column;
      
    }
 
  & h6 {
        font-size: 23px;
        text-align: left;
        font-family: 'Inter';
        font-weight: 700;
        line-height: 25px;
        width: 100%;
        color: #002450;
        margin-left: 5%;

        @media screen and (max-width: 900px) {
            max-width: 90%;
            margin: 2% 0%;
            text-align: center;
         }
  }
   
  & p {
        font-size: 15px;
        text-align: left;
        font-family: 'Inter';
        font-weight: 400;
        line-height: 20px;
        width: 100%;
        color: #63749A;
        margin: 2% 5%;

        
        @media screen and (max-width: 900px) {
            text-align: center;
            margin: 2% 0%;
         }
  }
`
const SecIconWrap = styled.div`
    background: var(--unnamed-color-ff6766) 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 1rem;
    border: 4px solid var(--unnamed-color-ffffff);
    background: #FFFFFF45 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 22px #FFD0CF7A;
    border: 4px solid #FFFFFF;
    border-radius: 20px;
    opacity: 1;

  & img {
    color: white;
    width: 50px;
    height: auto;
  }
`
const SectionTextWrap = styled.div`
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 1200px) {
        align-items: center;
    }
`
const OurCoursesWrapper = styled.div`
   width: 80%;
   height: auto;
   margin: 2rem auto;
`
const CoursesHead = styled.div`
   display: flex;
   justify-content: space-between;
   height: auto;
   margin: 1rem 0rem;
`
const OurCoursesSecs = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    flex-wrap: wrap;

    @media screen and (max-width: 900px) {
      flex-wrap: wrap;
      width: 100%;
  }
`
const OurCourseSec = styled.div`
  width: 25%;
  height: auto;
  border: 6px solid var(--unnamed-color-ffffff);
  box-shadow: 0px 6px 30px #39A8DD26;
  border: 6px solid #FFFFFF;
  border-radius: 33px;
  opacity: 1;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 10px 10px;

  @media screen and (max-width: 1200px) {
    width: 35%;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 75%;
  }

  & img {
    max-width: 100%;
    max-height: auto;
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  & h3 {
      font-size: 22px;
       text-align: center;
       font-family: 'Inter';
       font-weight: 700;
       color: #002450;
       line-height: 25px;
       margin: 10px 0px;

       & span {
        font-size: 22px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 700;
        color: #FF6766;
        line-height: 25px;
       }
  }

  & p {
        font-size: 15px;
        text-align: center;
        font-family: 'Inter';
        font-weight: 500;
        line-height: 25px;
        width: 80%;
        color: #63749A;
        margin: 10px 0px;
    }
`