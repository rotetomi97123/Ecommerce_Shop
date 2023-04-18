import React from 'react'
import image from '../assets/AUDIOHIVE.png'
import styled from 'styled-components'

const Discount = () => {
  return (
    <Wrapper>
        <Image src={image} alt="discount" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding-bottom: 5rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
export default Discount