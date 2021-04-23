import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
// import { motion } from "framer-motion";

const ProfileContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem 2rem 4rem;
  /* height: 100vh; */
  min-width: 100vw;
  margin: 0 auto;
  background:#f6f9fc;

  @media ${device.laptop}{
    margin: 0;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;

    }

  @media ${device.tablet}{
    padding: 4rem 1.5rem;
    }
    
  @media ${device.mobileM}{
    padding: 1rem;
    }

`;

const ProfileTitle = styled.h1`
  font-size: 3.25rem;
  font-weight: bold;
  color: ${props => props.theme.primaryColour};
  margin: 0;
`;

const ProfileSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
  margin: 1rem 0 0 0;
  font-style: italic;
 `;

const ProfileGrid = styled.div`
    margin-top: 1rem;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr;
    gap: 2rem 2.5rem;
    grid-template-areas:
        ". ."
        ". ."
        ". ."
        ". .";

    margin-top: 2rem;
    text-align: left;

    @media ${device.laptop}{
      display: flex;
      flex-direction: column;
    }
    @media ${device.tablet}{
      P {
        text-align: justify;
      }
    }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  height: 100%;
  max-height:500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  @media ${device.laptop}{
    margin: 1rem 0 2rem 0;
    }

  img {
    position: absolute;
    border-radius: 8px;
    height: 100%;
    width: 80%; 
    object-fit: cover;
    object-position: center;

    box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    @media ${device.laptop}{
    width: 100%;
    }
  }

`

export { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid, ProfileImageContainer };