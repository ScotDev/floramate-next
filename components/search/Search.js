import React, { useState, useEffect, useRef } from 'react';
// import { useQuery, useQueryClient } from 'react-query';
import Select from 'react-select'
import { AiOutlineSearch } from 'react-icons/ai'

import useFetch from '@hooks/useFetch';

import Spinner from '@utils/Spinner';
import Card from './Card';
import { ResultsGrid } from '@shared-styled-components/Utils';
import { RegularText } from '@shared-styled-components/Text';
import { SearchSection, SearchFormWrapper, SearchForm, SearchBox, SearchBtn, SearchFormFilters, StyledSelect, PageSortWrapper, ResultsHeading } from './SearchUIComponents';

const APIurl = "https://floramate-cms.herokuapp.com/profiles";

// const getResults = async (key) => {

//     const searchTerm = "q=" + key.queryKey[1].searchTerm;
//     const plantTypes = key.queryKey[2].types.map(val => `type=${val}`);
//     const difficulties = key.queryKey[3].difficulties.map(val => `difficulty=${val}`);

//     // console.log(Object.keys(key.queryKey[2]))

//     const typeFilterString = plantTypes.join("&");
//     const difficultyFilterString = difficulties.join("&");

//     // There has to be a clearn/more programmatic way of building these queries

//     if (searchTerm && plantTypes || difficulties) {
//         const res = await fetch(`${APIurl}/profiles?_${searchTerm}&${typeFilterString}&${difficultyFilterString}`);
//         const formattedRes = await res.json();
//         return formattedRes;
//     }
//     if (searchTerm) {
//         const res = await fetch(`${APIurl}/profiles?_${searchTerm}`);
//         const formattedRes = await res.json();
//         return formattedRes;
//     }


//     const res = await fetch(`${APIurl}/profiles`);
//     return res.json();
// }

export default function Search({ staticData, plantTypeFilters, difficultyFilters }) {
    // const queryClient = useQueryClient();

    // const vals = plantTypeFilters.map(item => console.log(item))

    // console.log(plantTypeFilters)
    // const [searchTerm, setSearchTerm] = useState("");
    const [plantTypes, setPlantTypes] = useState([]);
    const [difficulties, setDifficulties] = useState([]);
    const [customError, setCustomError] = useState(false);


    // Need to find out how to pass err if no results found
    // const { data, status, isFetching, error } = useQuery(['results', { searchTerm: searchTerm }, { types: plantTypes }, { difficulties: difficulties }], getResults, { initialData: staticData });

    // useEffect(() => {
    //     if (data.length < 1) {
    //         setCustomError("No results found, please expand your search");
    //     } else {
    //         setCustomError(false)
    //     }

    // }, [data])


    const { data, isLoading, error, handleSearch, handleFilters, resetSearch } = useFetch(staticData, null);

    // const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(10)
    const [sort, setSort] = useState("ASC")

    const [light, setLight] = useState("")
    const [moisture, setMoisture] = useState("")

    const searchQuery = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let trimmedQuery = searchQuery.current.value.trim();
        // setSearchTerm(trimmedQuery);
        handleSearch(APIurl, trimmedQuery, { type: plantTypes, difficulty: difficulties })
    }



    let lightFilter;
    let moistureFilter;

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

    // useEffect(() => {
    //     const fetchSearchResults = async () => {
    //         setError(null)
    //         setIsLoading(true)
    //         try {
    //             const res = await fetch(`${APIurl}/profiles?${queryParam}_sort=latin_name:${sort}&_limit=${limit}${difficultyFilter}${plantTypeFilter}${lightFilter}${moistureFilter}`);
    //             const formattedRes = await res.json();
    //             if (formattedRes.length === 0) {
    //                 setTimeout(() => {
    //                     setIsLoading(false);
    //                     setError("No results found, please modify your search")
    //                 }, 1000);

    //             }
    //             setData(formattedRes);
    //             setTimeout(() => {
    //                 setIsLoading(false);
    //             }, 800);
    //         } catch (err) {
    //             setError(err);
    //             setData(staticData);
    //             setIsLoading(false);
    //             console.log("Error loading data from API: ", err)
    //         }

    //     };
    //     fetchSearchResults();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [queryParam, limit, sort, difficulty, plantType, light, moisture])

    let items;

    if (data.length > 0) {
        items = data.map((item, index) => {
            return (
                <Card key={index} data={item} />
            )
        })

    }

    const handleLimitChange = e => {
        setLimit(e.target.value)
    }
    const handleSortChange = e => {
        setSort(e.target.value)
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
                {/* <h2>Let's get searching</h2> */}
                <SearchFormWrapper>
                    <SearchForm onSubmit={handleSubmit}>
                        <SearchBox type="text" placeholder="Enter a search term..." ref={searchQuery} ></SearchBox>
                    </SearchForm>
                    <SearchFormFilters>

                        <Select
                            getOptionLabel={option => option.value}
                            getOptionValue={option => option._id}
                            options={plantTypeFilters}
                            instanceId="plantTypes"
                            isMulti
                            isClearable
                            placeholder="Plant types..."
                            onChange={values => setPlantTypes(values.map(type => type.value))}
                        />

                        <Select
                            getOptionLabel={option => option.value}
                            getOptionValue={option => option._id}
                            options={difficultyFilters}
                            instanceId="difficulties"
                            isMulti
                            isClearable
                            placeholder="Difficulty..."
                            onChange={values => setDifficulties(values.map(difficulty => difficulty.value))}
                        />

                        {/* <StyledSelect name="light_requirements" onChange={handleLightChange}>
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
                        </StyledSelect> */}

                    </SearchFormFilters>
                    <button onClick={() => { resetSearch(), searchQuery.current.value = "" }}>Reset search</button>    <SearchBtn type="submit" onClick={handleSubmit}>Search <AiOutlineSearch /></SearchBtn>

                </SearchFormWrapper>


                <PageSortWrapper>
                    {/* <label>View:</label>
                    <StyledSelect name="limit_results" onChange={handleLimitChange}>
                        <option value="12">12</option>
                        <option defaultValue value="24">24</option>
                    </StyledSelect> */}


                    <label>Sort:</label>
                    <StyledSelect disabled name="sort_results" onChange={handleSortChange}>
                        <option defaultValue value="ASC">Latin name ASC</option>
                        <option value="DESC">Latin name DESC</option>
                    </StyledSelect>

                </PageSortWrapper>
            </SearchSection>

            {/* {query ? (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>) : null} */}

            {customError && (<RegularText style={{ textAlign: "center" }}>{customError}</RegularText>)}

            <ResultsGrid>
                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
