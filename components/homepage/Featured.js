import Link from 'next/link';
import React from 'react';

import Card from '../search/Card';
import { FeaturedGrid } from '../styled-components/Utils';
import { LinkBtn } from '../styled-components/Button';
import { BsArrowRightShort } from 'react-icons/bs';


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

    return (<>
        <FeaturedGrid>
            {items}
        </FeaturedGrid>
        <Link href="/species"><LinkBtn>Browse more<BsArrowRightShort /></LinkBtn></Link>
    </>)
}
