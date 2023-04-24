import React, { useEffect, useState,useRef } from 'react'
import styled from "styled-components"
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { speakers } from './data'
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Speaker = () => {

  const splideRef = useRef(null);


  const handleArrowClick = (direction) => {
    if (splideRef.current) {
      if (direction === "left") {
        splideRef.current.go("-1");
      } else if (direction === "right") {
        splideRef.current.go("+1");
      }
    }
  };
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
          <h2>POPULAR SPEAKERS</h2>
          <Splide  ref={splideRef} options={{
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
           <LeftArrow onClick={() => handleArrowClick("left")}/>
           <RightArrow onClick={() => handleArrowClick("right")}/>
         </Wrapper>
   </div>
  )
}

const Wrapper = styled.div`
position: relative;

h2{
  text-align: center;
  font-size: 4rem;
  background-color:#DF3E3C;
  border-radius:1rem;
  color: white;
  padding: 1rem 0;
  width: 100%;
  @media (max-width: 800px){
    font-size: 2.5rem;
  }
}
`
const Card = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  background-color: #D2d2d2;
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
const LeftArrow = styled(FaChevronLeft)`
  position: absolute;
  font-size: 3rem;
  cursor: pointer;
  left: 0;
  width: 50px;
  top: 65%;
  transform: translateY(-65%);
  &:hover{
    color:#DF3E3C;
    transition: 0.3s ease;
  }
`
const RightArrow = styled(FaChevronRight)`
  cursor: pointer;
  position: absolute;
  font-size: 3rem;
  right: 0;
  top: 65%;
  transform: translateY(-65%);
  &:hover{
    color:#DF3E3C;
    transition: 0.3s ease;
  }
`

export default Speaker;