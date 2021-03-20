import styled from 'styled-components';
import { motion } from "framer-motion";
// import { device } from '../../config/Breakpoints';


// This all needs to be made more consistent across the site, far too many custom font-size etc are used to override these properties
const Title = styled(motion.h1)`
    font-size: ${props => props.theme.size.title};
    color: ${props => props.color || props.theme.primaryText};
    margin-bottom: 0.5em;
    max-width: ${props => props.maxWidth};
    text-shadow: ${props => props.textShadow ? "0 6px 12px rgb(50 50 93 / 25%), 0 3px 7px rgb(0 0 0 / 30%)" : "none"}
`;
const Subtitle = styled(motion.h2)`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.color || props.theme.primaryText};
    margin-bottom: 0.5em;
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
    text-shadow: ${props => props.textShadow ? "0 6px 12px rgb(50 50 93 / 25%), 0 3px 7px rgb(0 0 0 / 30%)" : "none"}
`;
const LargeText = styled(motion.h4)`
    font-size:${props => props.theme.size.largeText};
    color: ${props => props.color || props.theme.primaryColour};
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
    margin-bottom: 0.5em;
`;
const RegularText = styled(motion.p)`
    font-size:${props => props.theme.size.regularText};
    color: ${props => props.color || props.theme.primaryColour};
    max-width: ${props => props.maxWidth};
    line-height: 1.6;
    text-align: ${props => props.textAlign};
    padding: ${props => props.padding || "1em"};

`;
const SmallText = styled(motion.p)`
    font-size:${props => props.theme.size.smallText};
    color: ${props => props.color || props.theme.primaryColour};
`;

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
    }

    ul {
        margin: 1rem 0 0 0;
        padding: 0;
        list-style-type: none;

        li {
            padding: 0.5rem 0;

/* Animate hover state with framer motion */
            a {
                color: ${props => props.theme.primaryColour};
                font-weight: 600;
                font-size: 1.1rem;
            }
        }
    }

`;

export { Title, Subtitle, LargeText, RegularText, SmallText, TextBlockItem };