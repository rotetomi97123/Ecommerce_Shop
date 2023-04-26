import React, { useState,useEffect } from 'react'
import Audio from '../assets/LOGO.png'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {showSection , hideSection, removeItemFromCart , clearCart , handleIncrement, handleDecrement} from '../actions'
import { AiOutlineShopping, AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {


    const [toggleNav, setToggleNav] = useState(false)
    const [toggleMobileNav, setToggleMobileNav] = useState(false)
    const dispatch = useDispatch();
    const isShow = useSelector(state => state.showSection)
    const cartItems = useSelector(state => state.cart.cartItems)

    const totalPrice = cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(2);
   
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 970) {
            setToggleNav(true);
          }
           else {
            setToggleNav(false);
            setToggleMobileNav(false);
          }
        };
        // Call handleResize initially to set initial state
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup function to remove event listener on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <NavText>
            {toggleNav &&<Menu onClick={() => {setToggleMobileNav(!toggleMobileNav);}} size={40} />}
            <LogoWrap>
                <img src={Audio} alt="logo" />
            </LogoWrap>
            {toggleNav ===false ?<NavUl>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Products'>Products</Link></li>
                <li><a href="#contact">Contact Us</a></li>
            </NavUl>:''}
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
                        <SectionLast>Price</SectionLast>
                    </SectionWrapper>
                    <CartWrapper>
                    {cartItems.map((item, index) => (
                        <Card key={index}>
                            <CardImageWrap>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </CardImageWrap>
                        <Quantity>
                            <button onClick={() => dispatch(handleDecrement(item))}>-</button>
                                <p>{item.quantity}</p>
                            <button onClick={() => dispatch(handleIncrement(item))} >+</button>
                        </Quantity>
                            <p>${item.price}</p>
                        <Remove onClick={() => dispatch(removeItemFromCart(index))}>Remove</Remove>
                     </Card>
                    ))}
                            <SectionCheckOut>
                                <p></p>
                                <ClearButton onClick={()=> dispatch(clearCart())}>Clear Cart</ClearButton>
                            </SectionCheckOut>

                            <SectionCheckOut>
                            <p>Total Price: ${totalPrice}</p>
                            <OrderButton><Link to='/Checkout'>Check Out</Link></OrderButton>
                            </SectionCheckOut>
                    </CartWrapper>
                    
                    <Exit onClick={() => dispatch(hideSection())}><AiOutlineCloseCircle /></Exit>
                </Section>
                            {/* CART SECTION */}
                <StyledSection toggleMobileNav={toggleMobileNav}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Products'>Products</Link></li>
                    <li>Contact Us</li>
                </StyledSection>
        </NavText>

)
}
const StyledSection = styled.section`
  z-index: 20;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  position: absolute;
  top: 6rem;
  left: ${props => (props.toggleMobileNav ? '-40px' : '-350px')};
  width: 150px;
  transition: 0.3s ease;
  height:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #DF3E3C;
  list-style-type: none;
  text-decoration: none;
  li{
      cursor: pointer;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: white;
      &:hover{
        color:#d3d3d3;
        transition: 0.3s ease;
       }

      a{
        color: white;
        list-style-type: none;
        text-decoration: none;
        &:hover{
            color:#d3d3d3;
            transition: 0.3s ease;
           }
   }
  
`;
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
    font-size: 1.2rem;
    text-align: center;
`
const SectionLast = styled.div`
    font-size: 1.2rem;
    text-align: center;
`
const Menu = styled(FiMenu)`
    cursor:pointer;
    
`
const SectionCheckOut = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-size: 1.5rem;
    }
    @media (max-width: 550px){
        width: 80%;

    }
    
`
const NavUl = styled.ul`
    padding: 1rem;
    display:flex;
    flex-direction: row;
    list-style-type: none;
    font-size: 1.5rem;
    background-color: #DF3E3C;
    color: white;
    border-radius: 1rem;
    li{
        a{
        list-style-type: none;
        color: white;
        text-decoration: none;
        &:hover{
            color:#d3d3d3;
            transition: 0.3s ease;
           }
       }
       margin:0 2rem;
       cursor: pointer;
       &:hover{
        color:#d3d3d3;
        transition: 0.3s ease;
       }
    }
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
    padding-top: 2rem;
    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 400px){
        height: 200px;
        width: 200px;
    }
`
const NavText = styled.div`
    position: relative;
    scroll-behavior: smooth;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
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
    padding: 1px;
    font-size: 18px;
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
    @media (max-width: 550px){
        flex-direction: column;
    }
    
`
const Remove = styled.button`
    font-family: 'Fredoka One', cursive;
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
    font-family: 'Fredoka One', cursive;
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
    a{
         color: white;
         text-decoration:none;
         list-style-type:none;
    }
    &:hover{
       opacity: 85%;
       transition: 0.3s ease;
    }
}
`
const ClearButton = styled.button`
    font-family: 'Fredoka One', cursive;
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
const CardImageWrap = styled.div`
    width: 280px;
    display: flex;
    align-items: center;
`
export default Navbar