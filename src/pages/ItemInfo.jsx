import React, { useState , useContext ,createContext} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai'
import Navbar from '../components/navbar';
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
        <Box>
        <LeftWrap>
            <img src={parsedMyProp.image} alt={parsedMyProp.name} />
        </LeftWrap>
        <RightWrap toggle={toggle}>
            <h1>{parsedMyProp.name}</h1>
            <p>{parsedMyProp.text}</p>
            <h5>${parsedMyProp.price}</h5>
            <Order onClick={() => dispatch(addItemToCart(parsedMyProp))}>Add to cart</Order>
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
  padding: 0 8rem;
  font-family: 'Bebas Neue', cursive;
  @media (max-width: 1400px){
    padding: 0 4rem;

  }
  @media (max-width: 700px){
    padding: 0 2rem;

  }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    font-family: 'Bebas Neue', cursive;
        @media (max-width: 1200px){
            padding: 1rem 1rem;
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
`
const LeftWrap = styled.div`
    img{
        width: 700px;
        height: 100%;
    }
`
const RightWrap = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
  h1{
    font-size: 5rem;
  }
  p{
    width: 500px;
    font-size: 1.2rem;
  }
  h5{
    font-size: 3rem;
    line-height:2px;
  }
`
const Order = styled.button`
    margin: 1rem 0;
    width: 250px;
    height: 50px;
    background-color: #FF3131;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size:1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        opacity: 80%;
        transition: 0.3s ease;
    }
`
const Back = styled.button`
    position: absolute;
    left: 2rem;
    top: 2rem;
    cursor:pointer;
    font-size: 1.5rem;
    background:none;
    border: none;
    border: 1px solid #DC143C ;
    padding: 5px 25px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    color: white;
    background: #DC143C ;
    &:hover{
        background:#990000;
        transition: 0.3s ease;
    }
`
const Specification = styled.div`
  padding: 0rem 0;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`
const SpecificationDetails = styled.div`
  width: 100%;
  line-height: 17px;
  height: 0px;;
  font-size: 1.2rem;
`
const Symbol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${({ toggle }) => toggle ? 'rotate(180deg)' : 'none'}
`
export default ItemInfo