import React from 'react';
import Search from '../../../components/search/Search';

export default function speciesProfile({ data }) {
    return (
        <>
            {/* <h1 style={{ color: "black", marginTop: "300px" }}>{data.common_name}</h1> */}
            <Search />
        </>
    )
}


// getserversideprops (static paths) in traversy video


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