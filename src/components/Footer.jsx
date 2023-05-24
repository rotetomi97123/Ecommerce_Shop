import React from 'react'
import styled from 'styled-components'
import Audio from '../assets/LOGO.png'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <FooterWrap>
      <Wrapper>
        <BoxLogo>
          <img src={Audio} alt="logo" />
        </BoxLogo>
        <Box>
          <h5>Useful links</h5>
          <p>Products</p>
          <p>Content</p>
          <p>Terms & Services</p>
        </Box>
        <Box>
        <h5>Community</h5>
          <p>Help Center</p>
          <p>Partners</p>
          <p>Suggestions</p>
        </Box>
      </Wrapper>
      <Line />
      <Copyright>
          <h1>Copyright © 2023 Audiohive. All Rights Reserved.</h1>
          <LogoDiv>
            <Face />
            <Insta />
            <Twitter />
            <Linked />          
            </LogoDiv>
      </Copyright>    </FooterWrap>
  )
}
const FooterWrap = styled.div`
  @media (max-width: 950px){
    margin-top: 14rem;
  }
  @media (max-width: 700px){
    margin-top: 7rem;
  }
`
const Line = styled.div`
  border-top: 5px solid black;
`
const Insta = styled(BsInstagram)`
  margin-right: 1rem;
  cursor:pointer;
  &:hover{
    color:#DF3E3C;
    transition: 0.1s ease;
  }
`
const Face = styled(BsFacebook)`
  margin-right: 1rem;
  cursor:pointer;
  &:hover{
    color:#DF3E3C;
    transition: 0.1s ease;
  }
`
const Linked = styled(BsLinkedin)`
cursor:pointer;
&:hover{
    color:#DF3E3C;
    transition: 0.1s ease;
  }
`
const Twitter = styled(BsTwitter)`
  margin-right: 1rem;
  cursor:pointer;
  &:hover{
    color:#DF3E3C;
    transition: 0.1s ease;
  }
`
const LogoDiv = styled.div`
  display: flex;
  font-size: 2rem;
`
const Copyright = styled.div`
  width: 100%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size: 1.2rem;
  }
  @media (max-width: 800px){
    flex-direction: column;
    margin-bottom: 1rem;
  }
` 
const Wrapper = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  border-radius: 1rem;
  @media (max-width: 950px){
    flex-direction: column;
    height: 100%;
  }
`
const BoxLogo = styled.div`
  height:100%;
  width:50%;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  @media (max-width: 950px){
    width: 100%;
    height: 33%;
    margin-top:2rem;
    img{
      width: 300px;
    }
  }
`
const Box = styled.div`
  height:100%;
  width:25%;
  display: flex;
  justify-content:center;
  flex-direction: column;
  h5{
    padding:0;
    margin:0;
    font-size: 2rem;
    margin-bottom:1rem;
  }
  p{
    padding:0;
    margin:0;
    font-size: 1.5rem;
    margin-bottom:0.5rem;
    cursor: pointer;
    &:hover{
      color:#DF3E3C;
      transition: 0.1s ease;

    }
  }
  @media (max-width: 950px){
    width: 100%;
    align-items:center;
    height: 33%;
    margin-bottom: 1rem;
  }
`

export default Footer