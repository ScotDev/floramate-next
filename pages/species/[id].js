import React from 'react';
import { NextSeo } from 'next-seo';
import Profile from '../../components/profile/Profile';

export default function SpeciesProfile({ data }) {

    const pageSEO = {
        title: data.latin_name || "Species profile",
        description: "View details about selected species",
        openGraph: {
            title: data.latin_name || "Species profile",
            description: "View details about selected species"
        }
    }

    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>
            <Profile data={data} />
        </>
    )
}


export const getStaticPaths = async (context) => {
    const res = await fetch(`https://floramate-cms.herokuapp.com/profiles`)
    const data = await res.json();

    const paths = data.map((item) => ({
        params: { id: item.id },
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://floramate-cms.herokuapp.com/profiles/${context.params.id}`)
    const data = await res.json();

    return {
        props: { data }
    }
}