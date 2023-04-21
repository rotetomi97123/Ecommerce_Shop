import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Products = () => {
  return (
    <ProductWrapper>
        <Navbar />
    </ProductWrapper>
  )
}
const ProductWrapper = styled.div`
    padding: 0 8rem;
    font-family: 'Fredoka One', cursive;

`
export default Products