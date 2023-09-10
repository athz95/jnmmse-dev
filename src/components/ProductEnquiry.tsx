import { useState } from 'react'
import styled from 'styled-components'
import { EdwoBtn } from './commonStyles'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

const ProductEnquiry = (props: Props) => {
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


  return (
    <ProductEnquiryWrap>
            <ToastContainer />
          <TopBorderSec></TopBorderSec>
          <ProductEnquiryHead>Product Enquiry</ProductEnquiryHead>
          <ProductEnquiryForm onSubmit={handleSubmit} className="form">
                <ProductEnquiryFormInput>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Name' value={formData.NAME} name="NAME"  onChange={handleChange}/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Email' value={formData.EMAIL} name="EMAIL"  onChange={handleChange}/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='Phone Number' value={formData.TELEPHONE} name="TELEPHONE"  onChange={handleChange}/>
                </ProductEnquiryFormInput>

                {/* <ProductEnquiryFormInput>
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder="Enter Subject"/>
                </ProductEnquiryFormInput> */}

                <ProductEnquiryFormInput>
                    <label htmlFor="">Message</label>
                    <textarea rows={5} placeholder="Type your message here" value={formData.MESSAGE} name="MESSAGE"   onChange={handleChange}/>
                </ProductEnquiryFormInput>

                <EdwoBtn>Submit</EdwoBtn>
          </ProductEnquiryForm>
    </ProductEnquiryWrap>
  )
}

export default ProductEnquiry

const ProductEnquiryWrap = styled.div`
    width: 300px;
    height: auto;
    background-color: #ffffff;
    padding: 0px 20px 30px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 900px) {
       width: 60%;
       margin: auto;
    }
`
const ProductEnquiryHead = styled.h4`
    font-size: 17px;
    font-weight: 700;
    color: #000000;
    text-align: center;
    margin-bottom: 10px;
`
const ProductEnquiryForm = styled.form`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 10px;
   align-items: center;
   justify-content: center;
`
const ProductEnquiryFormInput = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 100%;

   & input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
   }

   & textarea {
    resize: none;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    max-height: 300px;
   }
`

const TopBorderSec = styled.div`
    background-color: #0097df;
    width: 50%;
    height: 5px;
    margin: 10px auto;
`