import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hero from '../components/hero'
import EarBuds from '../components/EarBuds'
import Discount from '../components/discount'
import Speaker from '../components/Speaker'

const HomePage = () => {
  return (
    <HomeWrapper>
        <Navbar />
        <Hero />
        <EarBuds />
        <Discount />
        <Speaker />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  font-family: 'Fredoka One', cursive;
  padding: 0 8rem;
  @media (max-width: 1400px){
    padding: 0 4rem;

  }
  @media (max-width: 700px){
    padding: 0 2rem;

  }
`
export default HomePage