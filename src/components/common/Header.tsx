//components imports
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
//image imports
import LogoImage from "../../images/jnmNewLogo.png"
import { EdwoBtn } from '../commonStyles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/products', label: 'Products', productsPath: 'products' },
  { path: '/contact-us', label: 'Contact Us' },
];

const Menu = () => {
  const [currPage, setCurrPage] = useState('');
  const [productsUrl, setProductsUrl] = useState('')
  const location = useLocation();

  useEffect(() => {
    setCurrPage(location.pathname)
    setProductsUrl(location.pathname.split("/")[1])
  },[location.pathname])


  return (
      <>
          {menuItems.map(item => (
              <Link to={item.path} key={item.path}>
                  {currPage === item.path ? (
                      <HeaderLinkActive>{item.label}</HeaderLinkActive>
                  ) : productsUrl === item.productsPath ? (
                      <HeaderLinkActive>{item.label}</HeaderLinkActive>
                  ) : (
                      <HeaderLink>{item.label}</HeaderLink>
                  )}
              </Link>
          ))}
          <a href="https://drive.google.com/drive/folders/1UhIVZFUA3LfYnLd0zH-EpylqefA6ju73" target="_blank" rel="noreferrer">
              <EdwoBtn size="md">Explore Catalog</EdwoBtn>
          </a>
      </>
  );
};


const MobileMenu = () => {
  const [currPage, setCurrPage] = useState('');
  const [productsUrl, setProductsUrl] = useState('')
  const location = useLocation();

  useEffect(() => {
    setCurrPage(location.pathname)
    setProductsUrl(location.pathname.split("/")[1])
  },[location.pathname])

  return (
      <>
          {menuItems.map(item => (
              <Link to={item.path} key={item.path}>
                  {currPage === item.path ? (
                      <EdwoBtn>{item.label}</EdwoBtn>
                  ) : productsUrl === item.productsPath ? 
                       <EdwoBtn>{item.label}</EdwoBtn>
                  : (
                      <HeaderLinkMob>{item.label}</HeaderLinkMob>
                  )}
              </Link>
          ))}
      </>
  );
};


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  

  
  return (
    <HeaderWrapper>
      <HeaderSubWrap>
        <HeaderSubLeft>
          <Link to="/"><Logo src={LogoImage}></Logo></Link>
        </HeaderSubLeft>
        <HeaderSubRight>
             <Menu />
        </HeaderSubRight>
        <HeaderMenu>
          {toggleMenu ? (
             <CloseIcon onClick={() => setToggleMenu(false)} />
          ) : (
            <MenuIcon onClick={() => setToggleMenu(true)} />
          )}
        </HeaderMenu>
      </HeaderSubWrap>
      {toggleMenu && (
        <HeaderMobileMenuWrapper>
            <HeaderMobileMenu className='scale-up-center'>
                <MobileMenu />
            </HeaderMobileMenu>
        </HeaderMobileMenuWrapper>
          )}
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    z-index: 9999;
    padding: 20px 0px;
`
const HeaderSubLeft = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
       padding: 0px 10px;
    }
`
const HeaderSubWrap = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 10px 0px;
    margin: auto;
    background-color: #f1f6ffd1;
    padding: 10px 20px;
    border-radius: 10px;
`
const Logo = styled.img`
    width: 200px;
    height: 95px;
    object-fit: contain;

    @media screen and (max-width: 900px) {
      width: 150px;
      height: 75px;
  }
`
const HeaderSubRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;

    & a {
        text-decoration: none;

        :hover{
          color: #000409;
        }
    }

    @media screen and (max-width: 1050px) {
      display: none; 
    }
`
const HeaderLink = styled.a`
    font-family: 'Mulish', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #000000;
    text-decoration: none;
    margin: 0px 15px;
    letter-spacing: 1px;
`

const HeaderLinkMob = styled.a`
    font-family: 'Mulish', sans-serif;
    font-weight: 550;
    font-size: 15px;
    color: #000000;
    text-decoration: none;
    margin: 0px 15px;
`

const HeaderLinkActive = styled.a`
    font-family: 'Mulish', sans-serif;
    font-weight: 550;
    font-size: 15px;
    color: #151516;
    text-decoration: none;
    margin: 0px 15px;
`

const HeaderMenu = styled.div`
      margin-left: 1rem;
      display: none;
      position: relative;

      @media screen and (max-width: 1050px) {
            display: block;
        }
      & svg {
        color: #002450;
        position: absolute;
        z-index: 999;
        font-size: 35px;
        top: -15px;
        right: 30px;
      }
`
const HeaderMobileMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background-color: #ffffff;
  padding: 1rem;
  position: absolute;
  top: 110px;
  right: 55px;
  margin-top: 1rem;
  min-width: 150px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
  
  @media screen and (max-width: 1050px) {
      display: flex;
  }

  & a {
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 13px;
  }
  & button {
    padding: 5px 5px;
    font-size: 13px;
  }

`
const HeaderMobileMenuWrapper = styled.div`
    .scale-up-center {
      -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
        both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

      @-webkit-keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
      }
      @keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
    }
}
`