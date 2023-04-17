import React, { useState } from 'react'
import Audio from '../assets/Audio.png'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {showSection , hideSection, removeItemFromCart , clearCart , handleIncrement, handleDecrement} from '../actions'
import { AiOutlineShopping, AiOutlineCloseCircle } from 'react-icons/ai'

const Navbar = () => {

    const dispatch = useDispatch();
    const isShow = useSelector(state => state.showSection)
    const cartItems = useSelector(state => state.cart.cartItems)

    const totalPrice = cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(2);


  return (
    <NavText>
            <LogoWrap>
                <img src={Audio} alt="logo" />
            </LogoWrap>
            <LogoDiv onClick={() => dispatch(showSection())}>
                <ShopLogo />
                <Circle>{cartItems.length}</Circle>
            </LogoDiv>
               {/* CART SECTION */}

                <Section isVisible={isShow}>
                    <h1>Your Cart {cartItems.length} items</h1>
                    <SectionWrapper>
                        <SectionText>Product</SectionText>
                        <SectionText>Quantity</SectionText>
                        <SectionText>Price</SectionText>
                        <SectionText></SectionText>
                    </SectionWrapper>
                    <CartWrapper>
                    {cartItems.map((item, index) => (
                        <Card key={index}>
                            <div>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        <Quantity>
                            <button onClick={() => dispatch(handleDecrement(item))}>-</button>
                                <p>{item.quantity}</p>
                            <button onClick={() => dispatch(handleIncrement(item))} >+</button>
                        </Quantity>
                            <p>${item.price}</p>
                        <Remove onClick={() => dispatch(removeItemFromCart(index))}>Remove</Remove>
                     </Card>
                    ))}
                        <SectionWrapper>
                            <p></p>
                            <ClearButton onClick={()=> dispatch(clearCart())}>Clear Cart</ClearButton>
                            </SectionWrapper>

                            <SectionWrapper>
                            <p>Total Price: ${totalPrice}</p>
                            <OrderButton>Check Out</OrderButton>
                        </SectionWrapper>
                    </CartWrapper>
                    
                    <Exit onClick={() => dispatch(hideSection())}><AiOutlineCloseCircle /></Exit>
                </Section>
                            {/* CART SECTION */}
        </NavText>

  )
}
const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    display:flex;
    justify-content: center;
    align-items:center;
    color: white;
`
const LogoDiv = styled.div`
    cursor: pointer;
    position: relative;
    display:flex;
    justify-content: center;
    align-items:center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    &:hover{
        background-color:#D3D3D3;
        transition: 0.1s ease
    }
`
const SectionText = styled.div`
    margin-left: 2rem;
    font-size: 1.2rem;
`
const ShopLogo = styled(AiOutlineShopping)`
    font-size: 3rem;
    padding-right: 2px;
    &:hover{
        transform: scale(1.1);
    }
`
const Exit = styled.button`
    cursor:pointer;
    position: absolute;
    right: 1rem;
    top:1rem;
    font-size: 2rem;
    background:none;
    border: none;
    &:hover{
        color: red;
        transition: 0.1s ease-in-out
`
const LogoWrap = styled.div`
    width: 250px;
    height: 250px;
    padding: 1rem 1rem;
    img{
        width: 100%;
        height: 100%;
    }
`
const NavText = styled.div`
    width: 100%;
    height:13vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        font-size: 3rem;
        font-weight: 300;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
`
const SectionWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-top:1rem;
    p{
        font-size: 1.5rem;
    }
`
const CartWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-top:1rem;
    flex-direction: column;
    img {
        width: 100px;
    }
}
`
const Section = styled.div`
  z-index: 10;
  overflow: auto;
  position: relative;
  position: fixed;
  padding-bottom: 1rem;
  top: 0;
  right: ${({ isVisible }) => (isVisible ? "0" : "-900px")};
  height: 100vh;
  width: 900px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  h1{
    text-align: center;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
  @media (max-width: 550px){
    right: ${({ isVisible }) => (isVisible ? "0" : "-500px")};
    width: 100%;
  }
`;
const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 2px;
    font-size: 18px;
    margin: 0 10px;
    border-radius: 4px;
    button {
        border: none;
        background-color: white;
        color: black;
        font-size: 25px;
        margin: 0 5px;
        cursor: pointer;
    }
`
const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin-bottom: 2rem;
    p{
        font-size: 1.4rem;
    }
`
const Remove = styled.button`
    border-radius: 1rem;
    cursor: pointer;
    padding: 5px 5px;
    color: #2A2A2A;
    border: 2px solid #2A2A2A;
    background: none;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 2px;
    &:hover{
        opacity: 60%;
        transition: 0.3s ease;
    }
`
const OrderButton = styled.button`
    border-radius: 1rem;
    width: 250px;
    height: 50px;
    background-color:#FF3131;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size:1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
       opacity: 85%;
       transition: 0.3s ease;
    }
}
`
const ClearButton = styled.button`
    border-radius: 1rem;
    cursor:pointer;
    font-size: 1rem;
    background:#2A2A2A;
    border: 1px solid #2A2A2A ;
    padding: 5px 5px;
    border-radius: 2px;
    margin-left: 0rem;
    margin-bottom: 2rem;
    color: white;
    &:hover{
        opacity: 80%;
        transition: 0.3s ease;
    }
`
export default Navbar