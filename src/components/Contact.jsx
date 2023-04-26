import React from 'react'
import styled from 'styled-components'
import image from '../assets/contact.jpg'

const Contact = () => {
  return (
    <Wrapper id='contact'>
        <LeftSide>
            <div>
                <h1>Contact Us!</h1>
                <UnderLine />
            </div>
            <InputWrapper>
                <Input type="text" placeholder="Enter your Name"></Input>
                <Input type="email" placeholder="Enter your Email"></Input>
                <Textarea placeholder="Enter your Message"></Textarea>
                <Btn>Submit</Btn>
            </InputWrapper>
        </LeftSide>
        <RightSide>
            <img src={image} alt="image" />
        </RightSide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    scroll-behavior: smooth;
    width:100%;
    height: 100vh;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    display: flex;
    font-family: 'Fredoka One', cursive;
    @media (max-width: 950px){
        flex-direction: column;
    }
`
const LeftSide = styled.div`
    width: 55%;
    height: 100%;
    background-color:#DF3E3C;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        margin:0;
        padding: 0;
        color: white;
        font-size: 4rem;
    }
    @media (max-width: 950px){
        width: 100%;
        padding-bottom: 1rem;
        border-bottom-left-radius: 0rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    @media (max-width: 500px){
        h1{
            font-size: 2.5rem;
        }
    }
    
`
const RightSide = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#d2d2d2;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    @media (max-width: 950px){
        width: 100%;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        img{
            border-top-right-radius: 0rem;
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;

        }
    }
`
const UnderLine = styled.div`
    border-top: 3px solid white;
    border-radius: 1rem;
`
const Input = styled.input`
    font-family: 'Fredoka One', cursive;
    width: 350px;
    height: 50px;
    font-size: 1.5rem;
    background-color:#d2d2d2;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
    @media (max-width: 500px){
        width: 200px;
    }
`
const Textarea = styled.textarea`
    font-family: 'Fredoka One', cursive;
    width: 350px;
    height: 250px;
    font-size: 1.5rem;
    background-color:#d2d2d2;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
    padding-top: 1rem;
    @media (max-width: 500px){
        width: 200px;
    }
`
const InputWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`
const Btn = styled.button`
    font-family: 'Fredoka One', cursive;
    background-color:  black;
    cursor:pointer;
    font-size: 2rem;
    color: white;
    height: 50px;
    border: 1px solid black;
    border-radius: 1rem;
    &:hover{
        opacity: 85%;
        transition: 0.3s ease;
    }
    @media (max-width: 500px){
        width: 200px;
    }
`
export default Contact