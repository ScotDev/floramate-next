import React from 'react';
import Search from '../../components/search/Search';

export default function Species({ data }) {
    return (
        <>

            <Search staticData={data} />
        </>
    )
}

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`https://floramate-cms.herokuapp.com/profiles`)
//     const data = await res.json();

//     const paths = data.map((item) => ({
//         params: { id: item.id },
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://floramate-cms.herokuapp.com/profiles`)
    const data = await res.json();

    return {
        props: { data }
    }
}