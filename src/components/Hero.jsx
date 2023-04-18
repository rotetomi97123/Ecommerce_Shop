import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import hero from './data'
import { useDispatch } from 'react-redux'
import {addItemToCart} from '../actions'
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import herowrap from '../assets/herowrap.png'
const Hero = () => {

    const dispatch = useDispatch();
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex(index => (index + 1)  % hero.length);

        }, 5000);
        return () => clearInterval(intervalId);
      }, [hero.length]);
//--------------
      const [countdown, setCountdown] = useState(null);

      useEffect(() => {
        const endTime = new Date('2023-04-30T23:59:59Z').getTime();
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const remainingTime = endTime - currentTime;
    
          const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    
          if (remainingTime < 0) {
            clearInterval(interval);
            setCountdown('Deal has expired');
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
//--------------

  return (
    <HeroWrapper>
        <Wrapper>
            <Title>Limited-Time Offers</Title>
            <PriceWrap>
                <Name>{hero[index].name}</Name>
                <CircleBackground>
                    <Price>${hero[index].price}</Price>
                </CircleBackground>
            </PriceWrap>
                <FlexDiv>
                    <Link   
                        to={{ 
                        pathname: '/ItemInfo',
                        search:   queryString.stringify({ myProp: JSON.stringify(hero[index])}),
                    }}>
                        <Btn>View Details</Btn>
                    </Link>
                    <TextWrapper>
                        <h2>Description</h2>
                        <p>{hero[index].text}</p>
                    </TextWrapper>
                </FlexDiv>
                    <CountdownContainer>
                        {countdown ? `Deal ends in: ${countdown}` : 'Loading countdown...'}
                    </CountdownContainer>
                <HeroImg src={hero[index].image} alt="heroimg" />
        </Wrapper>
    </HeroWrapper>
  )
}
const CountdownContainer = styled.div`
  letter-spacing: 1px;
  display: flex;
  justify-content: flex-start;
  margin-left: 3rem;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #2A2A2A;
`;
const HeroWrapper = styled.div`
margin-top:1.5rem;
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
    @media (max-width: 1200px){
    }
    @media (max-width: 700px){
        height: 90vh;
    }
    @media (max-width: 550px){
        height: 80vh;
    }
    @media (max-width: 400px){
        height: 90vh;
    }
`
const Wrapper = styled.div`
    width:100%;
    height:80vh;
    background-image: url('https://i.ibb.co/xmq0Vrw/herowrap.png');
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    padding: 0rem 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1200px){
        width:100%;
        height:100%;
    }
    @media (max-width: 700px){
        padding: 0rem 1rem;
    }
    @media (max-width: 400px){
        height: 100%;
    }
`
const Title = styled.h1`
    letter-spacing: 2px;
    line-height: 50px;
    font-size: 8rem;
    color: #2A2A2A;
    @media (max-width: 1200px){
        font-size: 12rem;
    }
    @media (max-width: 850px){
        font-size: 8rem;
    }
    @media (max-width: 550px){
        font-size: 5rem;
    }
    @media (max-width: 400px){
        font-size: 4rem;
    }
    `
const CircleBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFDE59;
  border-radius: 0 2rem 2rem 0;
  width: 125px;
  height: 124px;
  text-align: center;
`;
    const Name = styled.p`
    height: 100px;
    margin-left: 1rem;
    padding-top: 1rem;
    padding-left:1rem;
    padding-right: 1rem;
    border: 4px solid #FFDE59;
    border-radius: 2rem 0 0 2rem;
    font-size: 4rem;
    color: #2A2A2A;
    letter-spacing: 2px;
    @media (max-width: 550px){
        font-size: 2rem;
    }
`
const PriceWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Price = styled.p`
    font-size: 3rem;
    color:  #2A2A2A;
`
const Btn = styled.button`
    background-color:#FFDE59;
    font-size: 1.5rem;
    padding: 0rem 1rem;
    border: none;
    color:black;
    width: 350px;
    height: 50px;
    border-radius: 1rem;
    margin-left:2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
        filter: brightness(0.9); 
        filter: saturate(0.8);
    }
    @media (max-width: 850px){
        max-width: 300px;
        padding: 0rem 0rem;
    }
    @media (max-width: 550px){
        margin-left: 0;
    }
    
`
const FlexDiv = styled.div`
    display:flex;
    justify-content: space-between;
    @media (max-width: 850px){
        flex-direction: column;
    }
    @media (max-width: 700px){
        margin-top:4rem;
    }
  
`
const TextWrapper = styled.div`
  h2{
    margin-right:3rem;
    text-align:right;
    @media (max-width: 1200px){
        margin-right:1rem;
    }
    @media (max-width: 850px){
        text-align:center;
        padding-top:1rem;
    }
  }
  p{
    width:400px;
    text-align:right;
    margin-right:1rem;
    @media (max-width: 1200px){
        margin-right:1rem;
        width:100%;
        text-align:center;
    }
    @media (max-width: 550px){
 
    }
  }

`
const HeroImg = styled.img`
    background-blend-mode: lighten;
    position: absolute;
    width: 600px;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    @media (max-width: 1200px){
        width: 400px;
    }
    @media (max-width: 850px){
        left: 80%;
    }
    @media (max-width: 700px){
        width: 250px;
        left: 70%;
        top: 35%;
    }
`
export default Hero;