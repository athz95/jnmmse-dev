import styled  from 'styled-components';

type StyleProps = {
    size?: string
}


export const EdwoBtn = styled.button<Pick<StyleProps, 'size'>>`
    background-color: #0097df;
    box-shadow: 0px 12px 17px #00000017;
    border-radius: 7px;
    opacity: 1;
    border: none;
    color: #FFFFFF;
    width: ${props => props.size === "md" ? "145px" : "170px"};
    height: auto;
    padding: ${props => props.size === "md" ? "10px 5px" : "15px 5px"};
    font-size: ${props => props.size === "md" ? "15px" : "18px"};
    font-weight: 550;
    outline: none;
    cursor: pointer;
    transition: all .5s ease;

    :hover {
        background-color: #2ab4f6;
    }
    :focus{
        border: 1px solid #ffffff;
    }
`
export const MainWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    margin: auto;
`
export const BodyWrapper = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  max-width: 100%;

  .mobileSidebar {
    display: none;
  }

  .desktopBannerSection{
    display: block;
  }

  .mobileBannerSection{
    display: none;
  }

  .container {
    max-width: 1680px;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    .mobileSidebar{
      display: block;
    }

    .desktopSidebar{
       display: none;
     }

     .mobileBannerSection{
      display: block;
    }

    .desktopBannerSection{
      display: none;
   }
  }
`
export const DescText = styled.div`
   font-size: 15px;
   /* font-family: 'Inter'; */
   font-weight: 500;
   color: #63749A;
   line-height: 20px;
`
export const SecHead = styled.div`

& h2 {
    font-size: 30px !important;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;

    & span {
        font-weight: 500;
    }
}
  
   & h4 {
       font-size: 13px;
       text-align: left;
       /* font-family: 'Inter'; */
       text-transform: uppercase;
       font-weight: 700;
       color: #39A8DD;
       line-height: 25px;
       margin-bottom: 10px;

       & span {
            font-size: 13px;
            text-align: center;
            /* font-family: 'Inter'; */
            text-transform: uppercase;
            font-weight: 700;
            line-height: 25px;
            color: #FF6766;
       }
   }
   & h6 {
       font-size: 22px;
       text-align: left;
       font-weight: 700;
       color: #002450;
       line-height: 25px;

       & span {
        font-size: 22px;
        text-align: left;
        font-weight: 700;
        color: #FF6766;
        line-height: 25px;
       }
   }
   & > p {
       font-size: 22px;
       text-align: left;
       font-weight: 700;
       color: #39A8DD;
       line-height: 25px;

       & span {
        font-size: 22px;
        text-align: left;
        font-weight: 700;
        color: #FF6766;
        line-height: 25px;
       }
   }   
`

export const EdwoBtnHeight = styled(EdwoBtn)`
  height : 50px;

  & a {
    color: white;
    text-decoration: none;
  }
`


export const BackBtn = styled.div`
    position: absolute;
    left: 30px;
    top: 15px;
    display: flex;
    align-items: center;

    & p {
       font-size: 13px;
       text-align: left;
       /* font-family: 'Inter'; */
       font-weight: 700;
       color: black;
       cursor: pointer;
    }
    & svg {
        font-size: 20px;
        margin-right: 5px;
    }
`