import React from 'react';
import { motion } from "framer-motion"
import { NextSeo } from 'next-seo';

// import getConfig from 'next/config';

const APIurl = "https://floramate-cms.herokuapp.com"
export default function about() {

    const pageSEO = {
        title: "About",
        description: "About floramate",
        openGraph: {
            title: "About",
            description: "About floramate"
        }
    }
    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>
            <h1>About</h1>

        </>
    )
}
