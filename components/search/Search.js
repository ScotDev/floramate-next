import React, { useState, useEffect, useRef } from 'react';
import { BsFilter, BsChevronDown } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

import Spinner from '../mini-components/Spinner';

import Card from './Card';
import { ResultsGrid } from '../styled-components/Utils';
import { RegularText } from '../styled-components/Text';
import { SecondaryBtn } from '../styled-components/Button'
import { SearchSection, SearchFormWrapper, SearchForm, SearchBox, SearchBtn, SearchFormFilters, CustomSelectWrapper, PageFilterWrapper, ResultsHeading, FilterBar, FilterBarWrapper, IconWrapper, FilterSelect } from './SearchUIComponents';
import { theme } from '../../config/Theme';


const APIurl = "https://floramate-cms.herokuapp.com"

export default function Search({ staticData }) {

    // Transition all to redux
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(24)
    const [sort, setSort] = useState("ASC")
    const [plantType, setPlantType] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [sun, setSun] = useState("")
    const [moisture, setMoisture] = useState("")
    const [data, setData] = useState(staticData);
    const [query, setQuery] = useState("")

    const searchQuery = useRef("")

    const handleSubmit = e => {
        e.preventDefault();
        let trimmedQuery = searchQuery.current.value.toString().trim();
        setQuery(trimmedQuery)
        console.log(searchQuery.current.value)
    }

    let difficultyFilter;
    let plantTypeFilter;
    let sunFilter;
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
                const res = await fetch(`${APIurl}/profiles?${queryParam}_sort=latin_name:${sort}&_limit=${limit}${difficultyFilter}${plantTypeFilter}${sunFilter}${moistureFilter}`);
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
                }, 1000);
            } catch (err) {
                setError(err);
                setData(staticData);
                setIsLoading(false);
                console.log("Error loading data from API: ", err)
            }

        };
        fetchSearchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParam, limit, sort, difficulty, plantType, sun, moisture])


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
    const handleSunChange = e => {
        setSun(e.target.value)
    }
    const handleMoistureChange = e => {
        setMoisture(e.target.value)
    }

    return (
        <>
            <SearchSection initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} >
                <SearchFormWrapper>
                    <SearchForm>
                        <SearchBox type="text" placeholder="Enter a search term..." ref={searchQuery}></SearchBox>
                        <SearchBtn type="submit" onClick={handleSubmit} ><AiOutlineSearch /></SearchBtn>
                    </SearchForm>
                    <SearchFormFilters>
                        <CustomSelectWrapper>
                            <select name="type" onChange={handlePlantTypeChange}>
                                <option defaultValue value="">Plant type</option>
                                <option value="Tree">Tree</option>
                                <option value="Shrub">Shrub</option>
                                <option value="Plant">Plant</option>
                            </select>
                            <BsChevronDown />
                        </CustomSelectWrapper>
                        <CustomSelectWrapper>
                            <select name="difficulty" onChange={handleDifficultyChange}>
                                <option defaultValue value="">Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Med">Medium</option>
                                <option value="Hard">Difficult</option>
                            </select>
                            <BsChevronDown />
                        </CustomSelectWrapper>
                        <CustomSelectWrapper>
                            <select name="sun_requirements" onChange={handleSunChange}>
                                <option defaultValue value="">Position</option>
                                <option value="Shade">Shade</option>
                                <option value="Half-shade">Half-shade</option>
                                <option value="Full-sun">Full-sun</option>
                            </select>
                            <BsChevronDown />
                        </CustomSelectWrapper>
                        <CustomSelectWrapper>
                            <select name="water_requirements" onChange={handleMoistureChange}>
                                <option defaultValue value="">Moisture type</option>
                                <option value="Wet">Wet</option>
                                <option value="Medium">Moderate</option>
                                <option value="Dry">Dry</option>
                            </select>
                            <BsChevronDown />
                        </CustomSelectWrapper>
                    </SearchFormFilters>
                    {/* <SecondaryBtn>Update results</SecondaryBtn> */}
                </SearchFormWrapper>
                <PageFilterWrapper>


                    <CustomSelectWrapper bgColor={"transparent"} color={theme.primaryText} borderRadius={"none"} border={"none"} borderBottom={"2px solid #fff"}>
                        <label>View:</label>
                        <select name="limit_results" onChange={handleLimitChange}>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option defaultValue value="24">24</option>
                        </select>
                        <BsChevronDown />
                    </CustomSelectWrapper>
                    {/* </PageFilterWrapper>
                <PageFilterWrapper> */}
                    <CustomSelectWrapper bgColor={"transparent"} color={theme.primaryText} borderRadius={"none"} border={"none"} borderBottom={"2px solid #fff"}>
                        <label>Sort:</label>
                        <select name="sort_results" onChange={handleSortChange}>
                            <option defaultValue value="ASC">Latin ASC</option>
                            <option value="DESC">Latin DESC</option>
                        </select>
                        <BsChevronDown />
                    </CustomSelectWrapper>
                </PageFilterWrapper>

            </SearchSection>

            {/* {query ? (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>) : null} */}

            {error && (<RegularText style={{ textAlign: "center" }}>{error}</RegularText>)}

            <ResultsGrid>

                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
