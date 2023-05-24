import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {addItemToCart} from '../actions'
import { comboDeal } from './data'

const Discount = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Box>
        <LeftBox>
          <h1>Combo Deal</h1>
          <PriceWrap>
                <Price>3 in 1 </Price>
                <OffText>package</OffText>
          </PriceWrap>
        </LeftBox>
        <RightBox>
            <img src={comboDeal[0].image} alt="discout" />
            <span>
              <p>${comboDeal[0].price}</p>
              <h3>$389.99</h3>
            </span>
          <Btn onClick={() => dispatch(addItemToCart(comboDeal[0]))}>Add to cart</Btn>
        </RightBox>
      </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width:100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  margin-top:2rem;
  @media (max-width: 1050px){
    height: 100%;
  }
`;
const Box = styled.div`
  width:100%;
  height:100%;
  background-image: url('https://i.ibb.co/tpJbdZb/Untitled-design-15.png');
  background-size: cover;
  background-position: center;
  border-radius:1rem;
  display:flex;
  @media (max-width: 1050px){
    flex-direction:column;
  }
`
const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h1{
    color:white;
    font-size: 7rem;
    margin:0;
    padding:0;
    @media (max-width: 1550px){
      font-size:5rem;
    }
    @media (max-width: 550px){
      font-size:3rem;
    }
  }
  @media (max-width: 1050px){
    width:100%;
    margin-top: 2rem;
  }
`
const RightBox = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  span{
    display:flex;
  }
  h3{
    color:black;
    font-size: 2.2rem;
    text-decoration: line-through;
    font-weight:100;
    @media (max-width: 1050px){
      color:darkgray;
    }
  }
  p{
    font-weight:100;
    color:#DF3E3C;
    font-size:3rem;
    padding-right: 1rem;
    @media (max-width: 1050px){
      color:white;
    }
  }
  img{
    width: 90%;
  }
  @media (max-width: 1050px){
    width:100%;
    margin-bottom: 2rem;
  }
`
const Btn = styled.button`
  width: 450px;
  height:50px;
  font-size: 1.5rem;
  border:none;
  border-radius:1rem;
  color: white;
  background-color: black;
  font-family: 'Fredoka One', cursive;
  cursor:pointer;
  &:hover{
    opacity: 90%;
    transition: 0.3s ease;
  }
  @media (max-width: 550px){
    width: 250px;
  }

`
const PriceWrap = styled.div`
    margin: 0;
    padding: 0;
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
    font-size: 5rem;
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
const OffText = styled.p`
    font-size: 5rem;
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
export default Discount