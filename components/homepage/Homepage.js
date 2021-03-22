import React from 'react';
// import { useInView } from 'react-intersection-observer'
import { PageSection, PageSectionTitle } from '../styled-components/Utils';

import Hero from '../hero/Hero';
import Info from './Info'
import Featured from './Featured';

export default function Homepage({ data }) {

    // Replace with plan js on scroll if possible
    // const [ref, inView] = useInView({
    //     rootMargin: "620px",
    //     threshold: 0,
    // })


    return (
        <>
            {/* <Navbar scrolling={inView}></Navbar> */}
            <Hero></Hero>
            <PageSection bgColor={"#2f3e46"} padding={"10vw"}>
                <PageSectionTitle color={"#fff"}>Featured</PageSectionTitle>
                <Featured data={data} />

            </PageSection>

            <PageSection>
                <Info></Info>
            </PageSection>
        </>
    )
}
