import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { hero,slider,speakers } from '../components/data'
import { useDispatch } from 'react-redux'
import {AiOutlineShopping} from 'react-icons/ai'
import {addItemToCart} from '../actions'
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const Products = () => {

  const dispatch = useDispatch();
  const ProductItems = [...hero,...slider,...speakers];

  return (
    <ProductWrapper>
      <Navbar />
      <TitleWrap>
        <h1>Product List</h1>
      </TitleWrap>
      <Wrapper>
    
        {ProductItems.map(item => <Card>
        <Link   
        to={{ 
          pathname: '/ItemInfo',
          search:   queryString.stringify({ myProp: JSON.stringify(item)}),
        }}>
            <ImageWrap>
              <img src={item.image} alt={item.name} />
            </ImageWrap>
           </Link>
          <p>{item.name}</p>
            <PriceWrap>
              <h5>${item.price}</h5>
              <OrderCircle  onClick={() => dispatch(addItemToCart(item))}>
                <Order size={45}  />
              </OrderCircle>
            </PriceWrap>
          </Card>)}
      </Wrapper>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.div`
    font-family: 'Fredoka One', cursive;
    padding: 0 8rem;
  @media (max-width: 1400px){
    padding: 0 4rem;

  }
  @media (max-width: 700px){
    padding: 0 2rem;

  }
  
  `
const OrderCircle = styled.div`
  width: 70px;
  height: 70px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #DF3E3C;
  &:hover{
    color: white;
    background:#990000;
    transition: 0.1s ease;
  }
  `
  const Order = styled(AiOutlineShopping)`
    cursor:pointer;
    &:hover{
        transition: 0.3s ease;
    }
  `
  const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h5{
    font-size: 1.5rem;
  }
`
const TitleWrap = styled.div`
  width: 100%;
  height: 10vh;
  display:flex;
  justify-content:center;
  align-items: center;
  background-color:#DF3E3C;
  margin-top: 5rem;
  border-radius: 1rem;
  h1{
    text-align:center;
    font-size: 3rem;
    color:white;
  }
`
const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p{
    font-size: 1.4rem;
  }
`
const Card = styled.div`
  display:flex;
  flex-direction:column;
  width: 378px;
  height: 480px;
  text-align: center;
  background-color: #d2d2d2;
  border-radius: 0.5rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  overflow:hidden;
`
const ImageWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 280px;
  img{
    width: 75%;
    height: 75%;
    object-fit: cover;
  }
`
export default Products