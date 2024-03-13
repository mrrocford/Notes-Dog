import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.warn('something went wrong' , error);
            setError(error.message)
        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {
        fetchData()
    }, []);

    return { data, isLoading, error }
};


