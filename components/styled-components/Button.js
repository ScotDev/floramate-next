import styled from 'styled-components';
import { motion } from "framer-motion";

import { device } from '../../config/Breakpoints';

const StyledBtn = styled(motion.button)`
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.25em 1.5em;
  margin-bottom: 0.5em;
  font-family: inherit;
  text-align: center;
  border: 2px solid transparent;
  font-size: ${props => props.fontSize || props.theme.size.regularText};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  transition: border 0.2s, color 0.2s, background-color 0.2s;
  cursor: pointer;
`

const PrimaryBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryColour || "#f7fffb"};
  background-color:  ${props => props.theme.primaryText || "#487161"};
  border: 2px solid ${props => props.theme.primaryColour || "#f7fffb"};
  font-weight: bold;

  &:hover, &:focus {
    color:  ${props => props.theme.primaryText || "#487161"};
    background-color: ${props => props.theme.primaryColour || "#f7fffb"};
    border: 2px solid  ${props => props.theme.primaryColour || "#487161"};
  }
  `;

const SecondaryBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText || "#f7fffb"};
  background-color: ${props => props.theme.secondaryColour || "#6e6448"};
  border: 2px solid ${props => props.theme.secondaryColour || "#f7fffb"};
  font-weight: bold;


&:hover, &:focus {
  color: ${props => props.theme.secondaryColour || "#2f3e46"};
  background-color: ${props => props.theme.primaryText || "#f7fffb"};
}
`

const InfoBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText || "#f7fffb"};
  background: rgba(255, 255, 255, 0.17);
  border: 2px solid ${props => props.theme.primaryText || "#f7fffb"};
  font-weight: bold;

  &:hover, &:focus {
    color:  ${props => props.theme.secondaryBlue || "#487161"};
    border: 2px solid ${props => props.theme.secondaryBlue || "#f7fffb"};
    background-color: ${props => props.theme.primaryText || "#f7fffb"};
  }
`


const BtnGroup = styled(motion.div)`
display: flex;
margin-bottom: 5rem;


button:nth-of-type(1) {
  margin-right:1rem;
}

@media ${device.tablet}{
        flex-direction: column;
        margin-bottom: 2rem;
        justify-content: center;
        align-items: center;

        button{
          width: 60%;
        }

        button:nth-of-type(1) {
          margin: 0.4rem 0;
}
}

`;


export { StyledBtn, PrimaryBtn, SecondaryBtn, BtnGroup, InfoBtn };
