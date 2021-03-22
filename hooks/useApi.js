import { useState, useEffect } from "react";

const useAPI = (endpointURL) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const makeCall = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(endpointURL);
                const formattedRes = await res.json();
                setData(formattedRes);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
                console.log("Error loading data from API: ", err)
            }
        };
        makeCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, error, isLoading };
};

export default useAPI;
