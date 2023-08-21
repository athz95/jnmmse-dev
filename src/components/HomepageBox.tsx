import styled from 'styled-components';
import PriceTagIcon from "./icons/PriceTagIcon";
import OriginalIcon from "./icons/OriginalIcon";

type Props = {
    boxTitle?: string;
    boxDesc?: string;
    boxIcon?: any;
}

const HomepageBox = (props: Props) => {
  return (
    <HomepageBoxWrap>
        {props.boxTitle === "Affordable Pricing" ? <PriceTagIcon /> : <OriginalIcon /> }
       <h3>{props.boxTitle}</h3>
       <p>{props.boxDesc}</p>
    </HomepageBoxWrap>
  )
}

export default HomepageBox;

const HomepageBoxWrap = styled.div`
    width: auto;
    max-width: 20vw;
    height: 200px;
    max-height: 15vh;
    background-color: #ffffff;
    border-radius: 8px;
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    & h3 {
        font-size: 20px;
        color: #000000;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }

    & p {
        font-size: 14px;
        color: #000000;
        font-weight: 400;
        text-align: center;
    }

    & svg {
        position: absolute;
        top: -30px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background-color: #ffffff;
        padding: 13px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        & path {
            fill: #0097df;
        }
    }
`