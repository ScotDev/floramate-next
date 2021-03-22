import React from 'react';

import useAPI from '../../hooks/useApi'


import Card from '../search/Card';
import { ResultsGrid } from '../styled-components/Utils';

// const APIurl = "https://floramate-cms.herokuapp.com"


export default function Featured({ data }) {

    // const getData = useAPI(`${APIurl}/profiles?_limit=3`)

    // const { data, isLoading } = getData;

    // if (isLoading) {
    //     return (<p>Loading...</p>)
    // }

    let items;

    if (data) {
        items = data.map((item, index) => {
            return (
                <Card key={index} data={item} />
            )
        })
    }

    return (
        <ResultsGrid>
            {items}
        </ResultsGrid>
    )
}
