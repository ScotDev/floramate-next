import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../../config/Breakpoints';

const Content = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media ${device.tablet}{
    padding: 0;
  }
`
const PageSection = styled(motion.div)`
  padding-left: ${props => props.padding || props.theme.mainContentPadding};
  padding-right: ${props => props.padding || props.theme.mainContentPadding};
  padding-bottom: 4rem;
  display: ${props => props.display || "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => props.bgColor};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    @media ${device.desktopL}{
    padding: 2rem ${props => props.theme.mainContentPadding};
    }

    @media ${device.laptop}{
    padding: 1rem;
    }
`
const PageSectionTitle = styled(motion.h3)`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.color || props.theme.primaryColour};
    margin: 0;
    padding: 1.5rem;
    text-align: center;
    line-height: 1.5;

    &::after {
      height: 3px;
      width: 100%;
      content: "";
      display: block;
      background-color: ${props => props.theme.secondaryColour};
      border-radius: ${props => props.theme.borderRadius}
    }
`

const ArticleContainer = styled(motion.div)`
  margin: 3rem 0;
  padding: 2rem 4rem;
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet}{
    /* width:100%; */
    padding: 1.1rem;
    margin: 0;
  }
`;


const ArticleBody = styled(motion.article)`
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  border-radius: ${props => props.theme.borderRadius};
  margin: 2rem 0;
  width: 100%;
  padding: 1rem 3rem;

  @media ${device.laptop}{
    width:90%;
  }

    @media ${device.tablet}{
    width:100%;
    padding: 1rem;
  }
`;

const CreditSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
background-color:${props => props.theme.primaryColour || "#f7fffb"};
/* border: none;
  margin-top: -1px; */
  padding-bottom:2rem;

  a{
    color: ${props => props.theme.primaryText};
    text-decoration: none;
    &:hover{
      border-bottom: 2px solid ${props => props.theme.primaryText};
    }
  }
`


const ErrorCard = styled(motion.div)`
display: flex;
  flex-direction:column;
  /* justify-content: center;
  align-items: center; */
  background-color: #fff;
  color: ${props => props.theme.primaryColour};
  min-height: 375px;
  height: auto;
  /* min-width: 270px; */
  /* width: 300px; */
  padding: 1rem;
  overflow: hidden;
  margin: 1rem;
  /* max-width: 300px; */
  /* margin: 0.9rem; */
  border-radius: 8px;
  /*  Taken from Stripe */
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  overflow: hidden;
  cursor: pointer;

`;


export { Content, PageSection, PageSectionTitle, ArticleContainer, ArticleBody, CreditSection, ErrorCard };