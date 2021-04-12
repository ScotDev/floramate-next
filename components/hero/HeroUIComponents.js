import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
import { motion } from "framer-motion";

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* align-items: center; */
  justify-content: center;
  padding-top:0;
  padding-bottom: 2rem;
  padding-left: ${props => props.theme.mainContentPadding};
  padding-right: ${props => props.theme.mainContentPadding};
  /* background-image: url("https://res.cloudinary.com/hyqgfnvpb/image/upload/v1616434757/nima_izadi_Jg_Gi_G2b_Mt_SM_unsplash_2_0dea8fd40e.jpg"); */
  background-image:url("./outdoor.svg");
  /* https://iconscout.com/illustration/woman-working-while-seating-on-park-bench-2969602 */
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    @media ${device.laptopL}{
      background-image:url("./outdoor_laptop.svg");
    }
    @media ${device.laptop}{
      padding-left: 15vw;
      padding-right: 15vw;

    }

    @media ${device.tablet}{
    text-align: center;
    padding-left: 5vw;
    padding-right: 5vw;
    justify-content: flex-start;
    padding-top: 4rem;

    background-image:url("./outdoor_mobile.svg");
    }

h1 {
  color: ${props => props.theme.primaryColour};
  font-size: 10rem;
  font-weight: 700;
  margin: 0;
  padding: 0 0 1.5rem 0;
  /* text-shadow: 0 6px 12px rgb(50 50 93 / 25%),
    0 3px 7px rgb(0 0 0 / 30%); */
  width: 100%;

  @media ${device.laptopL} {
    font-size: 8rem;
    padding: 2rem 0 1.75rem 0;
  }
  @media ${device.laptop} {
    font-size: 6rem;
    padding-bottom: 2rem;
  }
  @media ${device.tablet} {
    font-size:  4.75rem;
  }
}

h2, h3{
  color: ${props => props.theme.secondaryBlue};
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0 0 1rem 0;
  /* text-shadow: 0 6px 12px rgb(50 50 93 / 10%),
    0 3px 7px rgb(0 0 0 / 30%); */
  max-width: 40ch;

  @media ${device.laptopL} {
    padding-bottom: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: ${props => props.theme.size.largeText};
    padding-bottom: 2rem;
  }
  @media ${device.desktopL} {
    max-width: 100%;
    padding: 0 10em 1em 0;
  }
  
  @media ${device.tablet} {
    font-size: 1.8rem;
  }

}
`
export { HeroContainer };