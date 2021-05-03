import { useState, useEffect } from "react";

const useFetch = (initialData, endpointURL) => {
    const [url, setUrl] = useState(endpointURL);

    // Core state returned from hook
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const [hasQuery, setHasQuery] = useState(false);

    const [rawQuery, setRawQuery] = useState("")

    // Processes queries and filter params into usable strings
    // to pass to a data fetching function
    const handleSearch = async (query, filterObject) => {


        const { type, difficulty, moisture, light } = filterObject;


        // Create state that is just queryString. Use this function to set is to userQuery and/or params, no need for 2 different states.
        // That means that there is only one state change to trigger the useEffect to run this. Or will this just work as an async function?
        // Either way, it's more condensed and DRY


        // Handle filters. You can attempt to make this more dynamic
        // and reusable, but just try to get it working with keys hardcoded

        const types = await type.map(val => `type=${val}`);
        const typeFilterString = await types.join("&") + "&";

        const difficulties = await difficulty.map(val => `difficulty=${val}`);
        const difficultyFilterString = await difficulties.join("&") + "&";

        const moistures = await moisture.map(val => `water_requirements=${val}`);
        const moisturesFilterString = await moistures.join("&") + "&";

        const lights = await light.map(val => `water_requirements=${val}`);
        const lightsFilterString = await lights.join("&");
        // for (let x = 0, len = type.length; x < len; x++) {
        //     console.log(type[x])
        //     types += `type=${type[x]}`


        let queryParam;
        if (query.length > 0 && query !== undefined && query !== null) {
            queryParam = "_q=" + query + "&";
        } else {
            queryParam = "";
        }
        setRawQuery(queryParam);
        console.log("Query: ", query)
        console.log("Query param: ", queryParam)

        setUrl(endpointURL + "?" + queryParam + typeFilterString + difficultyFilterString + moisturesFilterString + lightsFilterString);
        // setHasQuery(true);

        console.log("handleSearch ran")
    }

    const resetSearch = () => {
        // setHasQuery(false);
        setUrl(endpointURL + "?" + rawQuery);
        console.log("resetSearch ran")
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await fetch(url)
                .then(res => {
                    if (!res.ok) {
                        // this throws error which is caught below
                        throw new Error("Could not retrieve specified resource")
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.length < 1 || data === undefined) {
                        setData([])
                        throw new Error("No results found")
                    }
                    setData(data);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);

                    setError(null);
                })
                .catch(err => {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                    setError(err.message);
                })
        };
        fetchData();
        console.log("fetchData ran: ", url)
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