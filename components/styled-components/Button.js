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
  outline: none;
  font-size: ${props => props.fontSize || props.theme.size.regularText};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  transition: all 0.2s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Default properties for button icons */
  svg {
    font-weight: inherit;
    /* vertical-align: middle; */
  }
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
  color: ${props => props.theme.primaryColour};
  background-color:  ${props => props.theme.primaryText};
  border: 2px solid transparent;
  font-weight: 500;

  &:hover, &:focus {
    color:  ${props => props.theme.primaryText};
    background-color: ${props => props.theme.secondaryColourLight};
    border: 2px solid  ${props => props.theme.secondaryColourLight};
  }
  `;

const CtaBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText};
  border: none;
  font-weight: 500;
  background-image: linear-gradient(to right, #2f3e46, #4f5874, #916b92, #d67d91, #ffa17a);
  background-size: 300%;
  background-position: right;
  transition: background-position 0.25s;

  &:hover, &:focus {
    background-position: left;
  }
`;

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

const LinkBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.secondaryColour};
  padding-right: 1em;

  &:hover, &:focus {
    background-color: ${props => props.theme.secondaryColourLight};
  }

    svg {
    font-size: 1.75em;
    padding: 0;
    margin: 0 0 0 0.1em;
  }

`;
const DiscreetBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText};
  background-color: transparent;
  padding: 0;
  font-size: ${props => props.theme.size.smallText};
  box-shadow: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  line-height: 1.4;
  margin: 1rem 2rem 0.25rem 0;
  align-self: flex-end;

  &:hover, &:focus {
    /* text-decoration: underline; */
    border-bottom: 2px solid ${props => props.theme.primaryText};
  }

    svg {
    font-size: 1.75em;
    padding: 0;
    margin: 0 0 0 0.1em;
  }
`;


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


export { StyledBtn, PrimaryBtn, SecondaryBtn, CtaBtn, LinkBtn, BtnGroup, InfoBtn, DiscreetBtn };
