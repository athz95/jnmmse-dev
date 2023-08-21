import React from 'react'
import styled from 'styled-components'
import { EdwoBtn } from './commonStyles'

type Props = {}

const ProductEnquiry = (props: Props) => {
  return (
    <ProductEnquiryWrap>
          <TopBorderSec></TopBorderSec>
          <ProductEnquiryHead>Product Enquiry</ProductEnquiryHead>
          <ProductEnquiryForm>
                <ProductEnquiryFormInput>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Name'/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Email'/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='Phone Number'/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder="Enter Subject"/>
                </ProductEnquiryFormInput>

                <ProductEnquiryFormInput>
                    <label htmlFor="">Message</label>
                    <textarea rows={5} placeholder="Type your message here"/>
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