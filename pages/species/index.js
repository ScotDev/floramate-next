import React from 'react';
import Search from '../../components/search/Search';

export default function Species({ data }) {

    return (
        <>
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