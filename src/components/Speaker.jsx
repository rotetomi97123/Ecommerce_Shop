import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { speakers } from './data'
import { Link } from 'react-router-dom';
import queryString from 'query-string';


const Speaker = () => {


// Splide
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setPerPage(1);
      } else {
        setPerPage(3);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
// Splide

    return (
        <div>
        <Wrapper>
          <h2>Best selling speakers</h2>
          <Splide options={{
           perPage,
           arrows: false,
           pagination: false,
           drag: 'free',
           gap: '5rem',
          }}>
             {speakers.map((item) => {
               return(
                 <SplideSlide id={item.id} key={item.id}>
                  <Link   
                    to={{ 
                      pathname: '/ItemInfo',
                      search:   queryString.stringify({ myProp: JSON.stringify(item)}),
                    }}>
                        <Card>
                      <img src={item.image} alt={item.name} />
                    </Card>
                  </Link>
                 </SplideSlide>
               )
              })};
           </Splide>
         </Wrapper>
   </div>
  )
}

const Wrapper = styled.div`
font-family: 'Bebas Neue', cursive;
h2{
  text-align: center;
  font-size: 5rem;
  margin-bottom: 1rem;
}
`
const Card = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  background-color: #DF3E3C;
  min-height: 30rem;
  boder-radius: 2rem;
  overflow:hidden;
  padding: 10px;
  border: 1px solid #ccc;
  transition: transform 0.2s ease-out;

  img{
    padding: 1rem 1rem;
    border-radius: 1rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease;
    opacity: 90%;
  }
`;


export default Speaker;