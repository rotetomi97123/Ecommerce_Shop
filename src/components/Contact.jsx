import React from 'react'
import styled from 'styled-components'
import Map from './Map';


const Contact = () => {
  return (
    <Wrapper>
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
        <Map address="123 Main St, Anytown USA" />
        </RightSide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    margin-top: 3rem;
    border-radius: 2rem;
    display: flex;
    font-family: 'Fredoka One', cursive;
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

`
const RightSide = styled.div`
    height: 100%;
    width: 45%;
    background-color:#d2d2d2;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
`
const UnderLine = styled.div`
    border-top: 3px solid white;
    border-radius: 1rem;
`
const Input = styled.input`
    width: 350px;
    height: 50px;
    font-size: 1.5rem;
    background-color:#d2d2d2;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
`
const Textarea = styled.textarea`
    width: 350px;
    height: 250px;
    font-size: 1.5rem;
    background-color:#d2d2d2;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
`
const InputWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`
const Btn = styled.button`
    font-family: 'Fredoka One', cursive;
    background-color:  #FFDE59;
    font-size: 2rem;
    color: #DF3E3C;
    height: 50px;
    border: 1px solid black;
    border-radius: 1rem;
    &:hover{
        opacity: 80%;
        transition: 0.3s ease;
    }
`
export default Contact