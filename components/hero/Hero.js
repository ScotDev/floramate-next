import React from 'react';
import { HeroContainer } from './HeroUIComponents';
import { SecondaryBtn, InfoBtn, BtnGroup } from '../styled-components/Button';
import Link from 'next/link';
import { motion } from "framer-motion";


const parentVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.22,
        }
    },
    hidden: {
        opacity: 0
    }
}

const childrenVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
}

const Hero = () => {

    return (<>
        <HeroContainer initial="hidden" animate="visible" variants={parentVariants} >

            <motion.h1 variants={childrenVariants}>floramate</motion.h1>
            <motion.h2 variants={childrenVariants}>Helping you find wildlife-friendly plants for your area</motion.h2>

            <BtnGroup variants={childrenVariants}>
                <Link href="/species">
                    <SecondaryBtn fontSize={"1.8rem"} >Browse</SecondaryBtn>
                </Link>
                {/* <Link to="/about">
                    <InfoBtn fontSize={"1.5rem"}>About</InfoBtn>
                </Link> */}
            </BtnGroup>

        </HeroContainer>
    </>)
};

export default Hero;