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


export { PillsContainer, PillItem };