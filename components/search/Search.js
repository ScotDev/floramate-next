import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import Spinner from '../mini-components/Spinner';
import Card from './Card';
import { ResultsGrid } from '../styled-components/Utils';
import { RegularText } from '../styled-components/Text';
import { SearchSection, SearchFormWrapper, SearchForm, SearchBox, SearchBtn, SearchFormFilters, StyledSelect, PageSortWrapper, ResultsHeading } from './SearchUIComponents';


const APIurl = "https://floramate-cms.herokuapp.com"

export default function Search({ staticData }) {

    // Transition all to redux
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(24)
    const [sort, setSort] = useState("ASC")
    const [plantType, setPlantType] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [light, setLight] = useState("")
    const [moisture, setMoisture] = useState("")
    const [data, setData] = useState(staticData);
    const [query, setQuery] = useState("")

    const searchQuery = useRef("")

    const handleSubmit = e => {
        e.preventDefault();
        let trimmedQuery = searchQuery.current.value.trim();
        setQuery(trimmedQuery)
        console.log(trimmedQuery)
    }

    let difficultyFilter;
    let plantTypeFilter;
    let lightFilter;
    let moistureFilter;
    let queryParam;

    if (difficulty.length > 0) {
        difficultyFilter = `&difficulty=${difficulty}`;
    } else {
        difficultyFilter = "";
    }

    if (plantType.length > 0) {
        plantTypeFilter = `&type=${plantType}`;
    } else {
        plantTypeFilter = "";
    }

    if (light.length > 0) {
        lightFilter = `&light_requirements=${light}`;
    } else {
        lightFilter = "";
    }

    if (moisture.length > 0) {
        moistureFilter = `&water_requirements=${moisture}`;
    } else {
        moistureFilter = "";
    }

    if (query.length > 0) {
        queryParam = `_q=${query}&`;
    } else {
        queryParam = "";
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
            setError(null)
            setIsLoading(true)
            try {
                const res = await fetch(`${APIurl}/profiles?${queryParam}_sort=latin_name:${sort}&_limit=${limit}${difficultyFilter}${plantTypeFilter}${lightFilter}${moistureFilter}`);
                const formattedRes = await res.json();
                if (formattedRes.length === 0) {
                    setTimeout(() => {
                        setIsLoading(false);
                        setError("No results found, please modify your search")
                    }, 1000);

                }
                setData(formattedRes);
                setTimeout(() => {
                    setIsLoading(false);
                }, 800);
            } catch (err) {
                setError(err);
                setData(staticData);
                setIsLoading(false);
                console.log("Error loading data from API: ", err)
            }

        };
        fetchSearchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParam, limit, sort, difficulty, plantType, light, moisture])


    let items;

    if (data) {
        items = data.map((item, index) => {
            return (
                <Card key={index} data={item} />
            )
        })

    }

    // Combine these into multipurpose function
    const handleLimitChange = e => {
        setLimit(e.target.value)
    }
    const handleSortChange = e => {
        setSort(e.target.value)
    }
    const handlePlantTypeChange = e => {
        setPlantType(e.target.value)
    }
    const handleDifficultyChange = e => {
        setDifficulty(e.target.value)
    }
    const handleLightChange = e => {
        setLight(e.target.value)
    }
    const handleMoistureChange = e => {
        setMoisture(e.target.value)
    }

    return (
        <>
            <SearchSection initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} >
                <h2>Let's get searching</h2>
                <SearchFormWrapper>
                    <SearchForm>
                        <SearchBox type="text" placeholder="Enter a search term..." ref={searchQuery}></SearchBox>
                    </SearchForm>
                    <SearchFormFilters>

                        <StyledSelect name="type" onChange={handlePlantTypeChange}>
                            <option defaultValue value="">Plant type...</option>
                            <option value="Tree">Tree</option>
                            <option value="Shrub">Shrub</option>
                            <option value="Plant">Plant</option>
                        </StyledSelect>
                        <StyledSelect name="difficulty" onChange={handleDifficultyChange}>
                            <option defaultValue value="">Difficulty...</option>
                            <option value="Easy">Easy</option>
                            <option value="Med">Medium</option>
                            <option value="Hard">Difficult</option>
                        </StyledSelect>

                        <StyledSelect name="light_requirements" onChange={handleLightChange}>
                            <option defaultValue value="">Position...</option>
                            <option value="low">Shade</option>
                            <option value="med">Half-shade</option>
                            <option value="high">Full-sun</option>
                        </StyledSelect>


                        <StyledSelect name="water_requirements" onChange={handleMoistureChange}>
                            <option defaultValue value="">Moisture type...</option>
                            <option value="high">Wet</option>
                            <option value="med">Moderate</option>
                            <option value="low">Dry</option>
                        </StyledSelect>

                    </SearchFormFilters>
                    <SearchBtn type="submit" onClick={handleSubmit}>Search <AiOutlineSearch /></SearchBtn>
                </SearchFormWrapper>


                <PageSortWrapper>
                    <label>View:</label>
                    <StyledSelect name="limit_results" onChange={handleLimitChange}>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option defaultValue value="24">24</option>
                    </StyledSelect>


                    <label>Sort:</label>
                    <StyledSelect name="sort_results" onChange={handleSortChange}>
                        <option defaultValue value="ASC">Latin name ASC</option>
                        <option value="DESC">Latin name DESC</option>
                    </StyledSelect>

                </PageSortWrapper>
            </SearchSection>

            {/* {query ? (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>) : null} */}

            {error && (<RegularText style={{ textAlign: "center" }}>{error}</RegularText>)}

            <ResultsGrid>
                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
