import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import hero from './data'
import { useDispatch } from 'react-redux'
import {addItemToCart} from '../actions'

const Hero = () => {

    const dispatch = useDispatch();
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex(index => (index + 1)  % hero.length);

        }, 5000);
        return () => clearInterval(intervalId);
      }, [hero.length]);

  return (
    <HeroWrapper>
        <Wrapper>
            <Name>{hero[index].name}</Name>
                <Title>HEADPHONE</Title>
                <FlexDiv>
                    <Btn onClick={()=>dispatch(addItemToCart(hero[index]))}>Add to cart</Btn>
                    <TextWrapper>
                        <h2>Description</h2>
                        <p>{hero[index].text}</p>
                    </TextWrapper>
                </FlexDiv>
                <HeroImg src={hero[index].image} alt="heroimg" />
        </Wrapper>
    </HeroWrapper>
  )
}

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
    height:100%;
    background-color:#d2d2d2;
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
`
const Title = styled.h1`
    letter-spacing: 7px;
    line-height: 1px;
    font-size: 18rem;
    color: white;
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
    const Name = styled.p`
    font-size: 4rem;
    color: #2A2A2A;
    letter-spacing: 2px;
    @media (max-width: 550px){
        font-size: 2rem;
    }
`
const Btn = styled.button`
    background-color:#FF3131;
    font-size: 1.5rem;
    padding: 0rem 1rem;
    border: none;
    color:white;
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
    margin-right:3rem;
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
    left: 65%;
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