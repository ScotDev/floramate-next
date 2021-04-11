import React from 'react';
import { NextSeo } from 'next-seo';
import Search from '../../components/search/Search';

export default function Species({ data }) {

    const pageSEO = {
        title: "Browse species",
        description: "Browse and search for plants",
        openGraph: {
            title: "Browse species",
            description: "Browse and search for plants"
        }
    }

    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>
            <Search staticData={data} />
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://floramate-cms.herokuapp.com/profiles`)
    const data = await res.json();

    return {
        props: { data }
    }
}