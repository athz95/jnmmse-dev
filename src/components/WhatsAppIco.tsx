import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';
import whatsappIcon from "../images/whatsappIcon.png";
import { client } from '../client';
import { companyInfoQuery } from '../utils/data';


type StyleProps = {
    rightSpace: string
}

interface companyDetails {
    address?: any;
    email?: any;
    mobile?: any;
    whatsappNumber: any;
 }


function WhatsappIco(props: any) {
    const [tooltipState, setTooltipState] = useState(true)



    const closeTooltip = () => {
        setTooltipState(false)
    }

    const [companyInfo, setCompanyInfo] = useState({} as companyDetails)


    useEffect(() => {
     client.fetch(companyInfoQuery).then((data) => {
       setCompanyInfo(data[0]);
     }).catch((err) => console.error(err));
   },[])

    return (
        <>
            <WhatsAppWrapper rightSpace={props.rightSpace}>
                {tooltipState && (
                    <WhatsAppTooltip rightSpace={props.rightSpace}>
                        <TooltipCross onClick={closeTooltip}><span>x</span></TooltipCross>
                        <WhatsAppTooltipText href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello`}>
                            <h6>Feel free to reach out</h6>
                            <p>Click here now</p>
                        </WhatsAppTooltipText>
                    </WhatsAppTooltip>
                )
                }
                <a href={'https://wa.me/+971547592208?text=Hello'}>
                    <img src={whatsappIcon} alt="whatsapp-icon" />
                </a>
            </WhatsAppWrapper>
        </>
    )
}

export default WhatsappIco;



const WhatsAppWrapper = styled.div<Pick<StyleProps, 'rightSpace'>>`
    position: fixed;
    bottom: 3px;
    right: ${(props) => (props.rightSpace ? props.rightSpace : "20px")};
    z-index: 999999;
    cursor: pointer;
    border-radius: 50px;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    & img {
        width: 50px;
        height: 50px;
    }
    & a {
      z-index: 99;
      text-decoration: none;
    }

    &.rpos {
    bottom: 0px;
    right: 5px;
    }
`
export const WhatsAppTooltip = styled.div<Pick<StyleProps, 'rightSpace'>>`
      position: fixed;
      bottom: 35px;
      right: ${(props) => (props.rightSpace ? props.rightSpace : "20px")};
      cursor: pointer;
      background: linear-gradient(90deg, #1C1E23 13.28%, #363B41 103.91%);
      box-shadow: 0px 0px 9px #4ED565;
      width: auto;
      padding: 0px 20px 10px 20px;
      border-radius: 10px;
      min-width: 250px;
`
export const TooltipCross = styled.div`
  width: 100%;
  height: 15px;

  & span {
    position: absolute;
    right: 10px;
    font-size: 18px;
    color: #7DD221;
    font-weight: 400;   
    /* font-family : 'Roboto'; */
  }
`

export const WhatsAppTooltipText = styled.a`
   & h6 {
        font-size: 12px;
        font-weight: 400;
        color: white;
        /* font-family: ''; */
        margin: 3px 0px;
        text-transform: capitalize;
        letter-spacing: 1px;
      }
      
      & p {
        /* font-family: 'Roboto'; */
        font-size: 10px;
        font-weight: 400;
        color: white;
        width: 130px;
        min-width: 70px;
        max-width: 85px;
        border-bottom: 1px solid #059602;
        margin: 3px 0px;
        text-transform: capitalize;
        font-style: italic;
      }
`