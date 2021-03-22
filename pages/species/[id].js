import React from 'react';
import Profile from '../../components/profile/Profile';

export default function SpeciesProfile({ data }) {
    return (
        <>
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