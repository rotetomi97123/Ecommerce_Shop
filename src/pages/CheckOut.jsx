import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { countries } from '../components/data'

const CheckOut = () => {
    const [items,setItems] = useState(countries)

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
                <h3>Your order</h3>
               
            </Box2>
        </Wrapper>
    </CheckWrapper>
  )
}
const CheckWrapper = styled.div`
    font-family: 'Fredoka One', cursive;
    padding: 0 8rem;
`
const Box2 = styled.div`

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
`
const Box = styled.div`
    width: 90%;
    height: 80%;
    background-color: #DF3E3C;
    border-radius: 1rem;
    color: white;
    display:flex;
    justify-content:center;
    flex-direction: column;
    padding-left: 2rem;
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
`
const Information = styled.div`
    display: flex;
`
const FormWrap = styled.div`
    display: flex;
    width: 25%;
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
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    input{
        font-size: 1.5rem;
        margin-right: 1rem;
        height: 40px;
    }
`
export default CheckOut