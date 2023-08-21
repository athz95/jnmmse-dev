import React from 'react'
import styled from 'styled-components'
// import AboutUs3c from "../images/about-us3c.png"


type Props = {
    productName?: string;
    productImage?: any;
    productUrl?: string;
}

const Product = (props: Props) => {
  return (
    <ProductWrap>
        <img src={props.productImage} alt="" />
        <h4>{props.productName}</h4>
        <button><a href={props.productUrl}>View</a></button>
    </ProductWrap>
  )
}

export default Product

const ProductWrap = styled.div`
    width: 20%;
    max-width: 250px;
    height: 250px;
    padding: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;

    
  & h4 {
     font-size: 15px;
     color: #000000;
     font-weight: 600;
     text-align: center;
  }

  & button {
     font-size: 12px;
     color: #5ca3d2;
     font-weight: 550;
     text-align: center;
     border: 1px solid #5ca3d2;
     padding: 10px 25px;
     background-color: #ffffff;
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     cursor: pointer;
     border-radius: 6px;

     & a {
        font-size: 12px;
        color: #5ca3d2;
        font-weight: 550;
        text-align: center;
        text-decoration: none;
     }
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 200px;
    max-height: 150px;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
    }
`