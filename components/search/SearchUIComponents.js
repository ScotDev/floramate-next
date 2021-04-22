import styled from 'styled-components';
import { motion } from "framer-motion";

import { device } from '../../config/Breakpoints';

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
  padding: 150px 0 1rem 0;
  text-align: center;
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%); */

    h2{ 
      font-size: ${props => props.theme.size.title};
      color: ${props => props.theme.primaryText};
      margin: 0;
      padding: 0 1em 0.75em 1em;
      }

    @media ${device.mobileL}  {
      padding: 100px 0 0 0;
  }
`
const SearchFormWrapper = styled.div`
  width: min(700px, 95%);
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color: ${props => props.theme.secondaryBlue};
  border-radius: 8px;
  padding: 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items:center;

  @media ${device.mobileL}  {
    padding: 2rem 0.75rem 1rem 0.75rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 0.75rem;
`;

const SearchBox = styled.input`
  padding: 10px 15px;
  margin: 0;
  width: 87.5%;
  height: 50px;
  font-size: ${props => props.theme.size.regularText};
  font-family: inherit;
  color: ${props => props.theme.primaryColour};
  outline: none;
  border: none;
  font-weight: 500;
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%); */
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border: none;

    ::placeholder {
    font-weight:500;
    }
`

const SearchBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 ;
  width: 12.5%;
  height: 50px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  font-weight: 500;
  font-size: 1.75rem;

  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-image: linear-gradient(to right, #2f3e46, #4f5874, #916b92, #d67d91, #ffa17a);
  background-size: 300%;
  background-position: right;
  transition: all 0.25s;

  &:hover, &:focus{
    background-position: left;
    box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  }

`

const SearchFormFilters = styled.div`
  margin: 1.5rem 0 0 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 0.5fr);
  width: 100%;
  /* font-size: ${props => props.theme.size.regularText}; */
  font-size: clamp(0.9rem, 1.1rem, 3rem);

  @media ${device.mobileL}  {
    margin: 1.5rem 0 1rem 0;
    width: 100%;
    gap: 1rem;
    /* font-size: ${props => props.theme.size.smallText}; */
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
  padding: 1.5rem 2rem;
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
  height: fit-content;
  overflow: hidden;
  /* max-width: 300px; */
  margin: 0.9rem;
  border-radius: 8px;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  overflow: hidden;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: all ease 0.2s;

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


export { SearchSection, SearchFormWrapper, SearchForm, SearchBox, SearchBtn, SearchFormFilters, StyledSelect, PageSortWrapper, ResultsHeading, ResultsCard, InnerCardGrid };