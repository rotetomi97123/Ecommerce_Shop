import React, { useState , useContext ,createContext} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai'
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux'
import {addItemToCart} from '../actions'

const ItemInfo = () => {

  const dispatch = useDispatch();
  const [ toggle, setToggle ] = useState(false)
  const location = useLocation();
  const { myProp} = queryString.parse(location.search);
  const parsedMyProp = JSON.parse(myProp);
  
 

  return (
    <ItemInfoWrapper>
    <Navbar />
    <Wrapper>
        <Box toggle={toggle}>
        <LeftWrap>
            <img src={parsedMyProp.image} alt={parsedMyProp.name} />
        </LeftWrap>
        <RightWrap toggle={toggle}>
            <h1>{parsedMyProp.name}</h1>
            <p>{parsedMyProp.text}</p>
            <h5>${parsedMyProp.price}</h5>
            <span>
              <Order onClick={() => dispatch(addItemToCart(parsedMyProp))}>Add to cart</Order>
            </span>
            <Specification>
                <div>Specification</div>
                <Symbol onClick={() => (setToggle(prev => !prev))} toggle={toggle}><AiOutlineDown /></Symbol>
            </Specification>
            {toggle &&<SpecificationDetails>
                <p>{parsedMyProp.specification}</p>
            </SpecificationDetails>}
            <Link to='/'><Back><BiArrowBack /></Back></Link>
        </RightWrap>
        </Box>
    </Wrapper>
    </ItemInfoWrapper>
  )
}
const ItemInfoWrapper = styled.div`
  font-family: 'Fredoka One', cursive;
  font-weigh: 100;
  padding: 0 8rem;
  @media (max-width: 1400px){
    padding: 0 4rem;

  }
  @media (max-width: 700px){
    padding: 0 2rem;

  }
  @media (max-width: 400px){
    padding: 0 1rem;
  }
`
const Wrapper = styled.div`
    font-weight: 100;
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
        @media (max-width: 1000px){
            height: 100%;
        }
`
const Box = styled.div`
    position: relative;
    border-radius: 1rem;
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d2d2d2;
    img {
        width: 800px;
    }
    @media (max-width: 1000px){
      flex-direction: column;
      height: 95%;
    }
    @media (max-width: 500px){
      padding-top: 4rem;
    }
`
const LeftWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    height:100%;
    img{
      width:700px;
      @media (max-width: 1000px){
        width: clamp(300px, 50%, 650px);
        height: auto;
      }
    }
`
const RightWrap = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
  h1{
    font-size: 5rem;
    line-height: 1.5;
    @media (max-width: 1000px){
      text-align:center;
      font-size: 2.5rem;
    }
  }
  p{
    font-weight: 200;
    max-width: 500px;
    font-size: 1.2rem;
    @media (max-width: 1000px){
      text-align:center;
      font-size: 1rem;
    }
  }
  h5{
    margin:0;
    padding: 1rem 0;;
    font-size: 3rem;
    line-height:2px;
    @media (max-width: 1000px){
      text-align: center;
    }
  @media (max-width: 1000px){
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  span{
    @media (max-width: 1000px){
      display:flex;
      justify-content:center;
      align-items: center;
    }
  }
`
const Order = styled.button`
    font-family: 'Fredoka One', cursive;
    margin: 1rem 0;
    width: 250px;
    height: 50px;
    background-color: #DF3E3C;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size:1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        background:#990000;
        transition: 0.3s ease;
    }
    @media (max-width: 400px){
      margin-left: 1rem;
    }
 
`
const Back = styled.button`
    position: absolute;
    left: 2rem;
    top: 2rem;
    cursor:pointer;
    font-size: 1.5rem;
    background-color: #DF3E3C;
    border: none;
    padding: 5px 25px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    color: white;
    &:hover{
        background:#990000;
        transition: 0.3s ease;
    }
`
const Specification = styled.div`
  display: flex;
  max-width: 450px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 400px){
    margin-left: 1rem;
    width:80%;
  }
`
const SpecificationDetails = styled.div`
  max-width: 450px;
  line-height: 17px;
  height: 0px;;
  font-size: 1.2rem;
  @media (max-width: 1000px){
    padding-bottom: 10rem;
    width: 95%;
    text-align: center;
  }

`
const Symbol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${({ toggle }) => toggle ? 'rotate(180deg)' : 'none'}
`
export default ItemInfo