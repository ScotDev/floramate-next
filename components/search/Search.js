import React, { useState, useEffect } from 'react';
import { BsFilter } from 'react-icons/bs'

import Spinner from '../mini-components/Spinner';

import Card from './Card';
import { ResultsGrid } from '../styled-components/Utils';
import { SearchSection, SearchBox, SearchBtn, ResultsHeading, FilterBar, FilterBarWrapper, IconWrapper, FilterSelect } from './SearchUIComponents';


const APIurl = "https://floramate-cms.herokuapp.com"

export default function Search({ staticData }) {

    console.log(staticData)

    // Transition all to redux
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(20)
    const [plantType, setPlantType] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [sun, setSun] = useState("")
    const [moisture, setMoisture] = useState("")
    const [data, setData] = useState(staticData);
    const [toggleDisplay, setToggleDisplay] = useState(false);
    const [query, setQuery] = useState("")

    const handleChange = e => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    let difficultyFilter;
    let plantTypeFilter;
    let sunFilter;
    let moistureFilter;

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

    if (sun.length > 0) {
        sunFilter = `&type=${sun}`;
    } else {
        sunFilter = "";
    }

    if (moisture.length > 0) {
        moistureFilter = `&type=${moisture}`;
    } else {
        moistureFilter = "";
    }

    useEffect(() => {
        const fetchSearchResults = async () => {
            setError(null)
            setIsLoading(true)
            try {
                const res = await fetch(`${APIurl}/profiles?_limit=${limit}${difficultyFilter}${plantTypeFilter}${sunFilter}${moistureFilter}`);
                const formattedRes = await res.json();
                if (formattedRes.length === 0) {
                    setError("No results found")
                }
                setData(formattedRes);
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);

            } catch (err) {
                setError(err);
                // console.log(defaultData)
                setData(staticData);
                setIsLoading(false);
                console.log("Error loading data from API: ", err)
            }

        };
        fetchSearchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, difficulty, plantType, sun, moisture])


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
    const handlePlantTypeChange = e => {
        setPlantType(e.target.value)
    }
    const handleDifficultyChange = e => {
        setDifficulty(e.target.value)
    }
    const handleSunChange = e => {
        setSun(e.target.value)
    }
    const handleMoistureChange = e => {
        setMoisture(e.target.value)
    }

    const handleToggleDisplay = () => {
        setToggleDisplay(!toggleDisplay)
    }

    return (
        <>
            <SearchSection initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} >
                <h2>Species</h2>
                <form>
                    <SearchBox type="text" placeholder="Search..." value={query} onChange={handleChange}></SearchBox>
                    <SearchBtn type="submit" value="Search" onClick={handleSubmit} />
                </form>

            </SearchSection>

            {query && (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>)}

            <FilterBarWrapper>
                <IconWrapper>
                    <BsFilter onClick={handleToggleDisplay} />
                </IconWrapper>
                <FilterBar display={toggleDisplay}>

                    <FilterSelect name="type" onChange={handlePlantTypeChange}>
                        <option selected value="">Any type</option>
                        <option value="Tree">Tree</option>
                        <option value="Shrub">Shrub</option>
                        <option value="Plant">Plant</option>
                    </FilterSelect>

                    <FilterSelect name="difficulty" onChange={handleDifficultyChange}>
                        <option selected value="">Any difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Med">Medium</option>
                        <option value="Hard">Difficult</option>
                    </FilterSelect>

                    <FilterSelect name="sun_requirements" onChange={handleSunChange}>
                        <option selected value="">Any sun</option>
                        <option value="Shade">Shade</option>
                        <option value="Half-shade">Half-shade</option>
                        <option value="Full-sun">Full-sun</option>
                    </FilterSelect>

                    <FilterSelect name="water_requirements" onChange={handleMoistureChange}>
                        <option selected value="">Any moisture</option>
                        <option value="Wet">Wet</option>
                        <option value="Medium">Medium</option>
                        <option value="Dry">Dry</option>
                    </FilterSelect>

                    <FilterSelect name="limit_results" onChange={handleLimitChange}>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option selected value="20">20</option>
                    </FilterSelect>
                </FilterBar>
            </FilterBarWrapper>

            <ResultsGrid>
                {error && (<p>{error}</p>)}
                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
