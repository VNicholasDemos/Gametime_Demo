import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://mobile-staging.gametime.co/v1/search";

const useGetSearchResults = (props) => {
    const { parameters } = props;
    const [response, setResponse] = useState({});

    useEffect(() => {
        axios.get(`${baseURL}?q=${parameters.searchString}`).then((response) => {
            setResponse(response.data);
        });
    }, [parameters.searchString]);

    return response || {};
};

export default useGetSearchResults;