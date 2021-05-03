import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../../config/Breakpoints';

const Content = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  /* background: ${props => props.bgColor || "none"}; */
  /* background: linear-gradient(125deg, rgba(104,150,134,1) 21%, rgba(224,234,226,1) 80%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#689686",endColorstr="#e0eae2",GradientType=1); */
  /* background-image: linear-gradient(to right, #051937, #003752, #125767, #3b7777, #689686); */
  background-image: linear-gradient(to left bottom, #2f3e46, #4f5874, #916b92, #d67d91, #ffa17a);
  min-height: 100vh;

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
  border-radius: 8px;
  margin: 2rem 0;
  width: 100%;
  padding: 1rem 3rem;
  background: #fff;

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
  position: absolute;
  bottom: 0;
  width: 100%;

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

const FlexBoxItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    text-align:justify;
    align-items: center;
    margin-right: 2.5rem;

    flex: 1 1 30%;

    p {
      max-width: 45ch;
    }

    h4 {
      line-height: 1.5;
    }

    h4::after {
    height: 3px;
    width: 100%;
    content: "";
    display: block;
    background-color: ${props => props.theme.secondaryColour};
    border-radius: ${props => props.theme.borderRadius}
    }

    @media ${device.laptop}{
      padding: 0.2rem 1rem;      
      margin: 0;
      flex-basis: 100%
    }
`

const TextBlockItem = styled.div`

    h3 {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => props.theme.secondaryBlue};
        margin: 0;
    }

    p {
        font-size: 1.1rem;
        font-weight: 400;
        color: ${props => props.theme.secondaryBlue};
        line-height: 1.4;
    }

    ul {
        margin: 1rem 0 0 0;
        padding: 0;
        list-style-type: none;

        li {
            padding: 0.5rem 0;
            a {
                color: ${props => props.theme.primaryColour};
                font-weight: 600;
                font-size: 1.1rem;
            }
        }
    }

`;

const FlexBox = styled(motion.div)`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin-bottom: ${props => props.marginBottom};

/* & > * {
  flex: 1 1 30%;
} */

`;

const ResultsGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-auto-rows: 450px;
  justify-items: start;
  /* grid-auto-flow: row; */
  /* display: flex;
  padding: 2rem 1rem;
  margin: 0 auto;
  flex-wrap: wrap; */
  /* align-items: center; */
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


img#spinner{
  margin: 0 auto;
}

`


export { Content, PageSection, PageSectionTitle, ArticleContainer, ArticleBody, CreditSection, ErrorCard, ResultsGrid, FlexBox, FlexBoxItem, TextBlockItem };