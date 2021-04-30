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

export default function Search({ staticData, plantTypeFilters, difficultyFilters }) {
    // const queryClient = useQueryClient();

    // const vals = plantTypeFilters.map(item => console.log(item))

    // console.log(plantTypeFilters)
    // const [searchTerm, setSearchTerm] = useState("");

    // const [data, setData] = useState(staticData)
    const [plantTypes, setPlantTypes] = useState([]);
    const [difficulties, setDifficulties] = useState([]);
    const [userError, setUserError] = useState(null);

    const searchQuery = useRef(null);
    const selectRef = useRef("")
    const selectRef2 = useRef("")

    const { data, error, isLoading, handleSearch, resetSearch } = useFetch(staticData, APIurl);

    // Garbage, fix
    const [limit, setLimit] = useState(10)
    const [sort, setSort] = useState("ASC")
    const [light, setLight] = useState("")
    const [moisture, setMoisture] = useState("")


    useEffect(() => {
        if (error) {
            setUserError(error)
        } else {
            setUserError(null)
        }
    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit ran");
        let trimmedQuery = searchQuery.current.value.trim();
        setUserError(null);
        if (!trimmedQuery || trimmedQuery.length < 2 || !isNaN(trimmedQuery)) {
            // resetSearch()
            setUserError("Please enter a valid search term")
            return
        }

        // Doesn't search if filters are valid but no valid search term. Should I change this?

        // if (plantTypes.length < 1 || difficulties.length < 1) {
        //     handleSearch("", { type: plantTypes, difficulty: difficulties })
        // } else {
        //     handleSearch(trimmedQuery, { type: plantTypes, difficulty: difficulties })
        // }
        handleSearch(trimmedQuery, { type: plantTypes, difficulty: difficulties })
    }


    // if (light.length > 0) {
    //     lightFilter = `&light_requirements=${light}`;
    // } else {
    //     lightFilter = "";
    // }

    // if (moisture.length > 0) {
    //     moistureFilter = `&water_requirements=${moisture}`;
    // } else {
    //     moistureFilter = "";
    // }


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

    const clearFilters = () => {
        resetSearch();
        searchQuery.current.value = "";
        selectRef.current.select.clearValue();
        selectRef2.current.select.clearValue();
    }

    return (
        <>
            <SearchSection initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} >
                {/* <h2>Let's get searching</h2> */}
                <SearchFormWrapper>
                    <SearchForm onSubmit={handleSubmit}>
                        <SearchBox type="text" placeholder="Enter a search term..." ref={searchQuery} ></SearchBox>
                        {/* <AiOutlineSearch /> */}
                    </SearchForm>
                    <SearchFormFilters>

                        <Select
                            ref={selectRef}
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
                            ref={selectRef2}
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
                    {/* <button onClick={clearFilters}>Reset search</button> */}
                    <SearchBtn type="submit" onClick={handleSubmit}>Search</SearchBtn>

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

            {/* {!userError && ? (<ResultsHeading initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>Results</ResultsHeading>): null} */}

            {userError && (<RegularText style={{ textAlign: "center" }}>{userError}</RegularText>)}

            <ResultsGrid>
                {isLoading ? (<Spinner />) : items}
            </ResultsGrid>
        </>
    )
}
