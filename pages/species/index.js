import React from 'react';
import { NextSeo } from 'next-seo';
import { QueryClientProvider, QueryClient } from 'react-query';

import Search from '@components/search/Search';

const queryClient = new QueryClient();

export default function Species({ profiles, plantTypeFilters, difficultyFilters, moistureFilters, lightFilters }) {


    const pageSEO = {
        title: "Browse species",
        description: "Browse and search for plants",
        openGraph: {
            title: "Browse species",
            description: "Browse and search for plants"
        }
    }

    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>
            <QueryClientProvider client={queryClient}>
                <Search staticData={profiles} difficultyFilters={difficultyFilters} plantTypeFilters={plantTypeFilters} moistureFilters={moistureFilters} lightFilters={lightFilters} />
            </QueryClientProvider>
        </>
    )
}

export const getStaticProps = async (context) => {

    const profilesRes = await fetch(`https://floramate-cms.herokuapp.com/profiles`)
    const profiles = await profilesRes.json();

    const typeFilterRes = await fetch(`https://floramate-cms.herokuapp.com/plant-type-filters`)
    const plantTypeFilters = await typeFilterRes.json();

    const diffFiltersRes = await fetch(`https://floramate-cms.herokuapp.com/difficulty-filters`)
    const difficultyFilters = await diffFiltersRes.json();

    const moistureFiltersRes = await fetch(`https://floramate-cms.herokuapp.com/moisture-filters`)
    const moistureFilters = await moistureFiltersRes.json();

    const lightFiltersRes = await fetch(`https://floramate-cms.herokuapp.com/position-filters`)
    const lightFilters = await lightFiltersRes.json();

    return {
        props: {
            profiles,
            plantTypeFilters,
            difficultyFilters,
            moistureFilters,
            lightFilters
        }
    }
}