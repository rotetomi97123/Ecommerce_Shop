import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { countries } from '../components/data'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const [items,setItems] = useState(countries)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(2);

  return (
    <CheckWrapper>
        <Navbar />
        <Wrapper>
            <Box>
                <h2><span>1</span> Personal Information</h2>
                <Information>
                    <FormWrap>
                       <p>First Name</p>
                        <input type='text'placeholder='Elon' />
                    </FormWrap>

                    <FormWrap>
                       <p>Last  Name</p>
                        <input type='text'placeholder='Musk' />
                    </FormWrap>
                </Information>
                <Information>
                    <FormWrapEmail>
                        <p>Email</p>
                        <input type='text'placeholder='example@spacex.com' />
                    </FormWrapEmail>
                </Information>
                <Information>
                <FormWrap>
                       <p>Country</p>
                        <select>
                            {items.map((item)=>{
                                return(
                                    <option value={item.country}>{item.country}</option>
                                )
                            })}
                        </select>
                    </FormWrap>

                    <FormWrap>
                       <p>Postal Code</p>
                        <input type='number'placeholder='1001' />
                    </FormWrap>
                </Information>
            </Box>
            <Box2>
                <h2><span>2</span>Your order</h2>
                {cartItems.length === 0 ? (
                 <p>Cart is empty</p>
                        ) : (
                            cartItems.map((item) => {
                                return(
                                <Information>
                                    <FormWrap>
                                        <p>{item.name} *{item.quantity}</p>
                                    </FormWrap>
                                    <FormWrap>
                                        <p>${item.price}</p>
                                    </FormWrap>
                                </Information>
                        )
                    })
                    )}
                <h4>Total Price: ${totalPrice}</h4>

                <Btn>Order</Btn>
              
            </Box2>
        </Wrapper>
    </CheckWrapper>
  )
}
const CheckWrapper = styled.div`
    font-family: 'Fredoka One', cursive;
    padding: 0 8rem;
    scroll-behavior: smooth;
    @media (max-width: 1400px){
    padding: 0 4rem;

    }
    @media (max-width: 700px){
    padding: 0 2rem;
    }
`
const Box2 = styled.div`
    width: 45%;
    height: 90%;
    background-color: #DF3E3C;
    color: white;
    display:flex;
    justify-content:center;
    flex-direction: column;
    padding: 0 1rem;
    border-left: 1px solid #d2d2d2;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    h2{
        font-size: 2rem;
        letter-spacing: 1px;
        display:flex;
        span{
            font-size: 1.2rem;
            background-color: black;
            width: 40px;
            height: 40px;
            display:flex;
            justify-content:center;
            align-items: center;
            border-radius: 50%;
            margin-right: 1rem;
        }
    }
    p{
        font-size: 1.5rem;
        margin-left: 4rem;
        background-color: white;
        color: #333333;
        padding: 0.5rem 0.5rem;
    }
    h4{
        font-size: 1.5rem;
        margin-left: 4rem;
        background-color: white;
        color: black;
        padding: 0.5rem 0.5rem;
    }
    @media (max-width: 900px){
        width: 95%;
        height: 45%;
        border-top-right-radius: 0rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border-left: 0px solid #d2d2d2;
        border-top: 1px solid #d2d2d2;
        p{
            margin-left:0rem;
        }
        h4{
            margin-left:0rem;
        }
    }
    @media (max-width: 400px){
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    `
const Wrapper = styled.div`
    position:relative;
    margin-top: 5.5rem;
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
    border: 1px solid black;
    background-color: #d2d2d2;
    border-radius: 1rem;
    @media (max-width: 900px){
        flex-direction: column;
        height: 150vh:
    }
    
`
const Box = styled.div`
    width: 45%;
    height: 90%;
    background-color: #DF3E3C;
    color: white;
    display:flex;
    justify-content:center;
    flex-direction: column;
    padding-left: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    h2{
        font-size: 2rem;
        letter-spacing: 1px;
        display:flex;
        span{
            font-size: 1.2rem;
            background-color: black;
            width: 40px;
            height: 40px;
            display:flex;
            justify-content:center;
            align-items: center;
            border-radius: 50%;
            margin-right: 1rem;
        }
    }
    @media (max-width: 900px){
        width: 95%;
        height: 45%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0rem;
        padding-bottom: 1rem;
    }
    @media (max-width: 400px){
        margin-top:5rem;
        padding-top: 5rem;
    }
`
const Information = styled.div`
    display: flex;
`
const FormWrap = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    input{
        font-size: 1.5rem;
        margin-right: 1rem;
        height: 40px;

    }
    select{
        font-size: 1.5rem;
        margin-right: 1rem;
        height: 40px;
    }
`
const FormWrapEmail = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    input{
        font-size: 1.5rem;
        margin-right: 1rem;
        height: 40px;
    }
`
const Btn = styled.button`
    font-family: 'Fredoka One', cursive;
    border-radius: 1rem;
    width: 250px;
    height: 50px;
    background-color:black;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size:1.5rem;
    cursor: pointer;
    transition: 0.3s ease;
    margin-left:4rem;
    margin-top: 2rem;
    a{
        color: white;
        text-decoration:none;
        list-style-type:none;
    }
    &:hover{
        background-color: #333333;
        transition: 0.3s ease;
    }
    }
    @media (max-width: 900px){
        margin-left: 0;
    }
`

export default CheckOut