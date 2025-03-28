import { useState, useEffect } from "react";

import { fetchApiData } from "../services/fetchApiData";

const useFetchMovies = () => {

    // Internal state for the hook
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // Method called by useEffect for fetching the data
    const getData = async () => {

        try{

            setIsLoading(true);

            /*
                The supported resources are:
                    movie
                    tv
                    person
                    
                The supported types below are:
                    now_playing
                    popular
                    top_rated
                    upcoming
            */
            const apiData = await fetchApiData("movie", "now_playing");

            setData(apiData);
            setError(null);

        } catch(err) {

            setError(err.message);
            setData(null);

        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        getData();
    }, [])

    return { data, isLoading, error };

};

export default useFetchMovies;