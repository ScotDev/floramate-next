import styled, { keyframes } from 'styled-components';
import { device } from '@config/Breakpoints';

// import { motion } from "framer-motion";

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;


const PillsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 0 0;
`;

const PillItem = styled.div`
    color: #fff;
    border-radius: 50px;
    padding: 0.2rem 1.75rem;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: ${props => props.bgColor};

 &:first-child{
  margin-right: 0.5rem;
 }
`;

const SliderContainer = styled.div`
  position: relative;
  display:flex;
  height:100%;
  min-height:450px;
  width:80%;
  justify-content: center;
  align-items:center;

  @media ${device.laptopL}{
    width: 90%
  }
  @media ${device.tablet}{
    width: 100%
  }

  img {
    border-radius: 8px;
    animation: ${fadeIn} 0.25s ease-in;
  }

  svg {
    position: absolute;
    top:50%;
    z-index: 50;
    user-select: none;
    cursor: pointer;
    font-size: 3rem;
    background-color: rgba(0,0,0, 0.4);
    border-radius: 8px;
    padding: 0.25rem;
    transition: background-color 0.15s ease-in;

    &:hover {
      background-color: ${props => props.theme.secondaryColour};
    }

    polyline {
      stroke: ${props => props.theme.primaryText};
    } 
  }

  #left-arrow {
    left: 20px;
  }

  #right-arrow {
    right: 20px;
  }
`;

export { PillsContainer, PillItem, SliderContainer };