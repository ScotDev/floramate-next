import React, { useEffect } from 'react';
import { PageSection, PageSectionTitle } from '../styled-components/Utils';

import Hero from '../hero/Hero';
import Info from './Info'
import Featured from './Featured';

const APIurl = "https://floramate-cms.herokuapp.com"

export default function Homepage({ data }) {

    // Wakes instance before user navigates to browse page.
    // Heroku free instance goes to sleep after 30 mins with no traffic,
    // so this cuts down on time until interactivity on the search page
    // by sending an early request to the backend. Probably best
    // to remove this and upgrade to basic paid tier in production.
    useEffect(() => {

        const wakeBackendInstance = async () => {
            let res;
            try {
                console.log("Waking instance...")
                res = await fetch(APIurl + "/about");
            } catch (error) {
                console.log("Failed to wake instance: ", error)
            }
            finally {
                console.log(res.status)
            }
        };
        wakeBackendInstance()
    }, [])

    return (
        <>
            <Hero></Hero>
            <PageSection bgColor={"#2f3e46"} padding={"10vw"}>
                <PageSectionTitle color={"#fff"}>Featured</PageSectionTitle>
                <Featured data={data} />

            </PageSection>

            <PageSection bgColor={"#f6f9fc"}>
                <Info></Info>
            </PageSection>
        </>
    )
}
