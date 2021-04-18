import React from 'react';
import { motion } from "framer-motion"
import { NextSeo } from 'next-seo';

import { server } from '../config/index';

import { theme } from '../config/Theme';

// These should be reworked, specifically the text
import { Content, ArticleContainer, ArticleBody } from '../components/styled-components/Utils';
import { Title, RegularText, Subtitle } from '../components/styled-components/Text';


const parentVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
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
            duration: 0.5
        }
    }
}

export default function about({ data }) {

    const pageSEO = {
        title: "About",
        description: "About floramate",
        openGraph: {
            title: "About",
            description: "About floramate"
        }
    }

    if (!data || data === undefined || data.length === 0) {
        return <h1>Data not found</h1>
    }

    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>
            <Content bgColor={theme.secondaryBlue}>
                <ArticleContainer initial="hidden" animate="visible" variants={parentVariants}>
                    <Title maxWidth={"50ch"} fontSize={"4rem"} color={theme.primaryText} variants={childrenVariants}>{data.page_title}</Title>
                    {/* <Subtitle maxWidth={"30ch"} color={theme.primaryText} variants={childrenVariants}>{data.page_subtitle}</Subtitle> */}
                    <ArticleBody variants={childrenVariants}>
                        <RegularText color={theme.secondaryBlue} maxWidth={"65ch"} textAlign={"justify"}>{data.page_text_content}</RegularText>
                    </ArticleBody>
                </ArticleContainer>
            </Content>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://floramate-cms.herokuapp.com/about`)
    const data = await res.json();

    return {
        props: { data }
    }
}
