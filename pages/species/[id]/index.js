import React from 'react'

export default function speciesProfile({ data }) {
    console.log(data)
    return (
        <div>
            <h1 style={{ color: "blue", marginTop: "300px" }}>{data.common_name}</h1>
        </div>
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