import React from 'react'
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';


const Spinner = () => {
  return (
    <SpinnerWrap> 
        <Circles 
           color="#00BFFF"
           height={50}
           width={200}
         />
    </SpinnerWrap>
  )
}

export default Spinner

const SpinnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`