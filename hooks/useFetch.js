import { useState, useEffect } from "react";

const useFetch = (initialData, endpointURL) => {

    const [url, setUrl] = useState(endpointURL);
    // Core state returned from hook
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // State to handle search queries and filtering
    const [userQuery, setUserQuery] = useState("")
    const [params, setParams] = useState(null)

    // If params received then process them and set them to params state and concat them to endpoint url

    const handleSearch = async (endpoint, query, filterObject) => {

        const { type, difficulty } = filterObject;

        setUrl(endpoint);

        if (query.length > 0) {
            setUserQuery(`_q=${query}`);
        } else {
            setUserQuery("")
        }

        // if (filterObject) {

        // make type dynamic
        const types = type.map(val => `type=${val}`);
        const typeFilterString = types.join("&");
        const difficulties = difficulty.map(val => `difficulty=${val}`);
        const difficultyFilterString = difficulties.join("&");
        // for (let x = 0, len = type.length; x < len; x++) {
        //     console.log(type[x])
        //     types += `type=${type[x]}`
        // }

        setParams(typeFilterString + "&" + difficultyFilterString)
        // console.log(params)

        // }
        // let target;
        // if (userQuery && params) {
        //     target = url + "?" + userQuery + params;
        // }
        // if (userQuery) {
        //     target = url + "?" + userQuery;
        // }

        // const filteredResults = await getResults(target);
        // console.log(filteredResults)


    }

    // use useffect to trigger data fetching when params change maybe

    const getResults = async (target) => {
        const res = await fetch(target);
        console.log("Target here: ", target)
        const formattedRes = await res.json();
        setData(formattedRes);
        // return formattedRes;
    }

    useEffect(() => {
        const target = url + "?" + userQuery + params;
        getResults(target)
    }, [params])

    const resetSearch = () => {
        setUserQuery("");
        setUrl("");
        setData(initialData);
    }



    useEffect(() => {

        // let target;
        // if (userQuery && params) {
        //     target = url + "?" + userQuery + params;
        // }

        //  else if (params) {
        //     target = url + "?" + params;
        // } 
        // if (userQuery) {
        //     target = url + "?" + userQuery;
        // }
        // else {
        //     target = endpointURL;
        // };

        const fetchData = async () => {
            await fetch(endpointURL)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not retrieve specified resource")
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null)
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(err.message);
                })
        };
        fetchData();
    }, [url]);

    return { data, error, isLoading, handleSearch, resetSearch };
};

export default useFetch;


// Functions of this hook:

// initialData already provided by next natively. Check if easier to use directly from next, or to include a
// initialData setter/handler here.

// Fetching data from an endpoint. Core of hook does not really need any changes.
// However, complementary functions and state should be created to allow handling of query terms, filters etc.

// Optionally when the above is complete and tested, a reset function can be added.