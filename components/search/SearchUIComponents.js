import styled from 'styled-components';
import { motion } from "framer-motion";

import { device } from '../../config/Breakpoints';

const SearchSection = styled(motion.div)`
  background: url("https://res.cloudinary.com/hyqgfnvpb/image/upload/v1616435022/search_bg_2616e6cf8c.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  height:450px;
  /* margin: 0 0 2rem 0; */
  padding: 175px 0 0 0;
  text-align: center;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    h2{
        color: #fff;
    margin: 0 0 2rem 0;
    font-size: 3.25rem;
    font-weight: bold;
    }
`

const StyledSearchInput = styled.input`
  padding: 10px 15px;
  font-size: 1.1rem;
  font-family: inherit;
  outline: none;
  border: none;
  font-weight: bold;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
`

const SearchBox = styled(StyledSearchInput)`
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border: 2px solid transparent;

    ::placeholder {
    font-weight:700;
    }
`

const SearchBtn = styled(StyledSearchInput)`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  cursor: pointer;
  color: #fff;
  background-color: ${props => props.theme.secondaryBlue};
  border: 2px solid transparent;

  &:hover, &:focus{
    color: #fff;
  background-color: ${props => props.theme.primaryColour};
  /* border: 2px solid var(--primary-blue); */
  border: 2px solid #fff;
  transition: 0.2s;
  }
`

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

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  background: transparent;
`;

const FilterBar = styled.form`
  width: 50%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 1rem auto 0.5rem auto;
  padding: 0.5rem 2rem;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color: ${props => props.theme.secondaryBlue};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  

  fieldset {
  /* border: 1px solid ${props => props.theme.primaryText}; */
  border:none;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color:${props => props.theme.primaryText};
    margin: 0.5rem;

    label {
    color: ${props => props.theme.secondaryBlue};
    font-weight: 500;
    font-size: ${props => props.theme.size.regularText};
    padding-bottom: 0.5rem;
    }

  }

  

  @media ${device.laptopL}{
    width: 70%;
    }

  @media ${device.laptop}{
    width: 90%;
    }

    @media ${device.tablet}{
    display: ${props => props.display ? "flex" : "none"};
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    }
`;

const IconWrapper = styled.div`
border: 0;
margin: 1rem auto 0.5rem auto;
display: none;
justify-content: flex-end;
align-items: center;
padding: 0;

@media ${device.tablet}{
    display: flex;
    }

svg {
    display: block;
    color: white;
    font-size: 2rem;

    cursor: pointer;
    background-color: ${props => props.theme.secondaryBlue};
    padding: 0.3rem;
    height: 47.375px;
    width: 47.375px;
    border-radius: ${props => props.theme.borderRadius};

  }
`;


const FilterSelect = styled.select`
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%); */
  /* border-radius: ${props => props.theme.borderRadius}; */
  border: none;
  padding: 0.2rem 0rem;
  font-family: inherit;
  font-size: ${props => props.theme.size.regularText};
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.secondaryBlue};
  /* background-color: transparent; */
  cursor:pointer;

  @media ${device.tablet}{
    padding: 0.5rem 0rem;
    /* width: 150px; */
    }
`

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
  content: "";
  display: block;
  height: 15px;
  width: 100%;
  background-color: ${props => props.theme.secondaryColour};
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
  font-size: 1.2rem;
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
  
  p{
    color: ${props => props.theme.secondaryBlue};
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;

    @media ${device.tablet}{
    font-size: 1rem;
    }
  }

  }
`


export { SearchSection, SearchBox, SearchBtn, ResultsHeading, FilterBar, FilterBarWrapper, IconWrapper, FilterSelect, ResultsCard, InnerCardGrid };