import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

import { device } from '@config/Breakpoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

const SearchSection = styled(motion.div)`
  /* background: url("https://res.cloudinary.com/hyqgfnvpb/image/upload/v1616435022/search_bg_2616e6cf8c.jpg"); */
  background-image: linear-gradient(to left bottom, #2f3e46, #4f5874, #916b92, #d67d91, #ffa17a);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 200px 0 100px 0;
  margin: 0;
  text-align: center;
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%); */

    h2 { 
      font-size: ${props => props.theme.size.title};
      color: ${props => props.theme.primaryText};
      margin: 0;
      padding: 0 1em 0.75em 1em;
      }

    @media ${device.mobileL}  {
      padding: 175px 0 0 0;
  }
`
const SearchFormWrapper = styled.div`
  width: min(650px, 92.5%);
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color: ${props => props.theme.secondaryBlue};
  border-radius: 8px;
  padding: 2rem 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0 2rem;

  @media ${device.mobileL} {
    padding: 0 0.75rem;
  }
`;

const SearchBox = styled.input`
  padding: 10px 15px;
  margin: 0;
  width: 100%;
  height: 50px;
  font-size: ${props => props.theme.size.regularText};
  font-family: inherit;
  color: ${props => props.theme.primaryColour};
  outline: none;
  border: none;
  font-weight: 500;
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%); */
  border-radius: 20px;
  border: none;

    ::placeholder {
    font-weight:500;
    }
`

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0.5rem 0 0 0;
  width: 100%;
  height: 50px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-weight: 500;
  /* font-size: 1.75rem; */
  font-size: min(10vw, 1.5rem);

  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  /* background-image: linear-gradient(to right, #2f3e46, #4f5874, #916b92, #d67d91, #ffa17a);
  background-size: 300%;
  background-position: right; */
  background-color: ${props => props.theme.secondaryColourLight};
  transition: all 0.25s;

  &:hover, &:focus{
    /* background-position: left; */
    /* background-size: 200%; */
    background-color: ${props => props.theme.secondaryColour};
    box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  }

  svg {
    font-size: ${props => props.theme.size.largeText};
    margin-left: 0.5rem;
  }

`

const SearchFilters = styled.div`
  margin: 1.5rem 0;
  padding: 1rem 2rem;
  /* display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 50%); */

  display: flex;
  flex-direction: column;
  font-size: clamp(0.9rem, 1.1rem, 3rem);

  h4 {
    all: unset;
    font-size: ${props => props.theme.size.largeText};
    align-self: center;
    padding-bottom: 1.75rem;
    color: ${props => props.theme.primaryText};
  }

  
  button:first-of-type {
    margin-top: 0;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    font-weight: 400;
    align-self: flex-end;
    border: none;
    box-shadow: none;
  }

  button:last-of-type {
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    align-self: center;
  }

  & > * {
    margin-bottom: 1.5rem;
  }

  @media ${device.laptopL}{
    button:last-of-type {
    font-size: 1.2rem;
  }
  }

  @media ${device.laptop}  {
    /* margin: 1.5rem 0 0 0;
    padding: 0 0.75rem;
    width: 100%;
    colum-gap: 1rem; */
    flex-direction: column;
    padding: 1.5rem 1rem 0;
    margin: 0;
    height: ${props => props.show ? "auto" : "0px"};
    overflow: hidden;
    display: ${props => props.show ? "flex" : "none"};
    box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
    animation: ${fadeIn} 0.35s ease-in;

    h4  {
      font-size: 1.3rem;
    }

    button:last-of-type {
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 400;
    align-self: center;
  }

  }
`;

const ResultsSection = styled.div`
  display:flex;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.secondaryBlue};
  min-height: 100vh;

  & > :first-child  {
    width: 20%;
    border-right: 1px solid lightgray;
  }

  & > :last-child {
    width: 80%;
  }

  @media ${device.laptopL}{
    & > :first-child  {
    width: 25%;
  }

  & > :last-child {
    width: 75%;
  }
  }

  @media ${device.laptop}{
    flex-direction: column;

    & > :first-child  {
    width: 100%;
    border-right: none;
    border-bottom: 3px solid ${props => props.theme.secondaryColourLight};
    margin-bottom: 2rem;
  }

  & > :last-child {
    width: 100%;
  }
  }
`;

const ResultsGrid = styled.div`
position: relative;
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-auto-rows: 450px;
  justify-items: center;
  /* grid-auto-flow: row; */
  /* display: flex;
  padding: 2rem 1rem;
  margin: 0 auto;
  flex-wrap: wrap; */
  align-items: center;
  /* justify-content: center; */
  /* background-image: linear-gradient(to bottom, #051937, #003752, #125767, #3b7777, #689686); */
  /* background-image: linear-gradient(to bottom, #2f3e46, #39535a, #44696c, #53807b, #689686); */

  /* & > * {
    flex: 1 1 100%;
    min-width: 300px;
    max-width: 340px;
  } */

  @media ${device.tablet}{
      display: flex;
      flex-direction: column;
      align-items: center;
    }


div.spinner {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%,-50%);
  /* grid-column: 2 / span 2 */
  /* margin: 0 auto; */
}

`

const FilterIconWrapper = styled.div`
  display: none;
  font-size: 2.5rem;
  color: ${props => props.theme.primaryText};
  margin: 2rem 0 0 0;

  @media ${device.laptop} {
    display: block;
  }
`;

const ResultsErrorWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%,-50%);

  @media ${device.laptop} {
    transform: translate(-50%, 0%);
  }
`;

const StyledSelect = styled.select`
    all:unset;
    display:block;
    padding: 0.5rem 1rem;
    margin: 0;
    min-height: 20px;
    font-size:inherit;
    background-color: transparent;
    -webkit-appearance: none;
    color: ${props => props.theme.primaryText};
    cursor: pointer;
    text-align:left;
    font-weight: inherit;
    background: url('/select_chevron.svg') no-repeat 95% center;
    border-bottom: 2px solid ${props => props.theme.primaryText};

    &:disabled {
      color: hsl(44, 0%, 70%);
    }

    option {
      background-color: ${props => props.theme.primaryText};
      color: ${props => props.theme.primaryColour};
      font-size:inherit;
      font-weight:inherit;
    }

    @media ${device.mobileL}  {
      padding: 0.25rem 0.5rem;
  }
`;

const PageSortWrapper = styled.div`
  margin: 0;
  display: flex;
  align-self: flex-end;
  align-items: center;
  color: ${props => props.theme.primaryText};
  padding: 2rem 2rem 1.5rem 2rem;
  max-width: 100%;
  
  label { padding-right: 0.25rem}

  select:first-of-type {
    margin-right: 2.5rem; 
       /* Wrong */
    min-width: 40px;
  }
  select:last-of-type {
    margin-right: 2.5rem;
    min-width: 155px;
  }
`;

const ResultsHeading = styled(motion.h3)`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.secondaryBlue};
  width: 10%;
  min-width: 175px;
  margin: 1.5rem auto;

  &::after {
    height: 3px;
    width: 100%;
    content: "";
    display: block;
    background-color: ${props => props.theme.secondaryColour};
    border-radius: ${props => props.theme.borderRadius}
  }
`;

const ResultsCard = styled(motion.div)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: ${props => props.theme.primaryColour};
  min-height: 375px;
  overflow: hidden;
  /* max-width: 300px; */
  margin: 0.9rem;
  border-radius: 8px;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  overflow: hidden;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: all ease-in 0.2s;
  transform: scale(1);

  &:hover {
    transform: scale(1) translateY(-10px);
    opacity: 0.75;    
  }

  &::before {
  content: '';
  display: block;
  height: 15px;
  width: 100%;
  background-color: ${props => props.bgColor || props.theme.secondaryColour};
  }


  img{
  height: 225px;
  object-fit: cover;
  width: 100%;
  border-bottom: 3px solid ${props => props.theme.secondaryColour};
  /* position: relative; */
  }

  h4 {
  /* color: #fff; */
  /* border-bottom: 2px solid var(--primary-green); */
  font-size: ${props => props.theme.size.regularText};
  text-align: center;
  margin: 0.5rem 1.5rem;
  padding-bottom: 0.3rem;
}

#divider {
  max-width: 20px;
  width: 5%;
  height: 2px;
  border-radius: 5px;
  background-color: ${props => props.theme.secondaryColour}
}

h5 {
  /* color: #fff; */
  border-bottom: 2px solid ${props => props.theme.secondaryColour};
  font-size: ${props => props.theme.size.regularText};
  text-align: center;
  margin: 0.5rem 1.5rem 1rem 1.5rem;
  padding-bottom: 0.3rem;
  font-style: italic;
  width: 85%;

}`;

const InnerCardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  /* margin: 0.8rem 1rem;*/
  padding: 0.8rem 1.5rem;
  overflow: hidden;
  width: 100%;

  @media ${device.tablet}{
    gap: 0.6rem;
    padding: 0.7rem 1rem;
  }

  div{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    font-weight: 500;
    align-items: center;

  svg{
    color: ${props => props.theme.secondaryColour};
    font-size: 1.5rem;
    margin-right: 0.1rem;

    @media ${device.tablet}{
    font-size: 1.25rem;
    }
  }
  
  p {
    color: ${props => props.theme.secondaryBlue};
    font-size: calc(${props => props.theme.size.smallText} + 10%); 
    font-weight: 500;
    margin: 0;

    @media ${device.tablet}{
    font-size: ${props => props.theme.size.regularText};
    }
  }

  }
`


export { SearchSection, SearchFormWrapper, SearchForm, SearchBox, SearchBtn, SearchFilters, ResultsSection, ResultsGrid, StyledSelect, PageSortWrapper, ResultsHeading, FilterIconWrapper, ResultsErrorWrapper, ResultsCard, InnerCardGrid };