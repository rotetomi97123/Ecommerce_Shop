import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {slider} from './data'
import { useDispatch } from 'react-redux'
import {addItemToCart} from '../actions'
import queryString from 'query-string';
import { Link } from 'react-router-dom';


const Hero = () => {

    const dispatch = useDispatch();
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex(index => (index + 1)  % slider.length);

        }, 5000);
        return () => clearInterval(intervalId);
      }, [slider.length]);

  return (
    <HeroWrapper>
        <Wrapper>
            <LeftBox>
                <Title>AUDIOHIVE</Title>
                <Name>BIG SPRING SALES</Name>
                    <PriceWrap>
                        <Price>50%</Price>
                        <OffText>OFF</OffText>
                    </PriceWrap>
            </LeftBox>
            <RightBox>
                    {/* <ProductName>{slider[8].name}</ProductName> */}
                    <HeroImg src={slider[index].image} alt="heroimg" />
                <ImageWrap>
                    <p>${slider[index].price}</p>
                        <Link   
                            to={{ 
                                pathname: '/ItemInfo',
                                search:   queryString.stringify({ myProp: JSON.stringify(slider[index])}),
                            }}>
                                <Btn>View Details</Btn>
                            </Link>
                </ImageWrap>
                
            </RightBox>
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
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    position: relative;
    width:100%;
    height:80vh;
    background-image: url('https://i.ibb.co/tpJbdZb/Untitled-design-15.png');
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    @media (max-width: 1500px){
        flex-direciton: column;
        height: 100%;
      
    }
    @media (max-width: 1200px){
       display: block;
    }
    @media (max-width: 700px){
        padding: 0rem 1rem;
    }
    @media (max-width: 400px){
        height: 100%;
    }
`
const OffText = styled.p`
    font-size: 6rem;
    color: #FFDE59;
    margin-left: 1rem;
    @media (max-width: 1200px){
        font-size: 3rem;
        max-width: 150px;
    }
    @media (max-width: 550px){
        font-size: 2rem;
        margin-left: 0rem;
    }
`
const ImageWrap = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        border: 1px solid black;
        min-width: 280px;
        border-radius: 1rem;
        background-color:#DF3E3C ;
        margin:0;
        padding: 0;
        padding: 0.5rem 0.5rem;
        text-align: center;
        color: white;
        font-size:1.5rem;
    }
`
const RightBox = styled.div`
    width: 40%;
    @media (max-width: 1200px){
       width: 100%;
       display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
`
const LeftBox = styled.div`
    width: 60%;
    @media (max-width: 1200px){
        margin-top: 2.5rem;
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
     }
`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    margin-left: 8rem;
    letter-spacing: 4px;
    font-size: 8rem;
    color: white;
    @media (max-width: 1750px){
        margin-left: 2rem;
    }
    @media (max-width: 1200px){
        font-size: 6rem;
        margin-left: 1rem;
    }
    @media (max-width: 850px){
        font-size: 4rem;
    }
    @media (max-width: 550px){
        font-size: 3rem;
    }
    @media (max-width: 400px){
        font-size: 2rem;
    }
    `

    const Name = styled.p`
    margin: 0;
    padding: 0;
    margin-left: 8rem;
    font-size: 4rem;
    color: white;
    @media (max-width: 1750px){
        margin-left: 2rem;
    }
    @media (max-width: 1200px){
        font-size: 2rem;
        margin-left: 1rem;
    }
   
`
const PriceWrap = styled.div`
    margin: 0;
    padding: 0;
    margin-left: 8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1750px){
        margin-left: 2rem;
    }
    @media (max-width: 1200px){
        margin-left: 1rem;
    }
`
const Price = styled.div`
    margin: 0;
    padding: 0;
    max-width: 200px;
    height: auto;
    background-color:#FFDE59;
    padding: 8px;
    font-size: 6rem;
    color:  #DF3E3C;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    @media (max-width: 1200px){
        font-size: 3rem;
        max-width: 150px;
    }
`
const Btn = styled.button`
    font-family: 'Fredoka One', cursive;
    border: 1px solid black;
    cursor: pointer;
    width: 300px;
    margin-top: 1rem;
    padding: 0.7rem 0.7rem;
    font-size: 2rem;
    border-radius: 1rem;
    background-color:#DF3E3C;
    color: white;
    &:hover{
        background:#990000;
        transition:0.3s ease;
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
    width: 600px;
    @media (max-width: 1750px){
    }
    @media (max-width: 1200px){
        width: 450px;
        margin-left: 1rem;
    }
    @media (max-width: 850px){
        width: 400px;

    }
    @media (max-width: 550px){
    }
    @media (max-width: 400px){
    }
`
export default Hero;