import { useEffect, useState } from "react";
import axios from "axios";


export const useFetchNoteId = (id) => { 
    const [note, setNote] = useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`toDos/${id}`);
                setNote(response.data); // оновити note з response.data
            } catch (error) {
                console.warn('something went wrong', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
      }, [id]); // змініть тут, щоб хук перезавантажувався при зміні id
    
        return { note, isLoading, error };
    };
