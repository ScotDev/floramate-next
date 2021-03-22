import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
// import { motion } from "framer-motion";


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
    font-weight: bold;
    background-color: ${props => props.native ? props.theme.secondaryColour : props.theme.secondaryBlue};

 &:first-child{
  margin-right: 0.5rem;
 }
`;


const Spinner = styled.div`

  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;


 div {
  background-color: ${props => props.theme.secondaryColour};
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
 }
 .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
 }
 .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
 }
 .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
 }
 .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
 }
`;

export { PillsContainer, PillItem };