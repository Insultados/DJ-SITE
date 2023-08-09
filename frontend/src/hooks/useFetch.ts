import { useState, useEffect } from 'react';


const useFetch = (url: string) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    try {
        useEffect(() => {
            fetch(url, {
                credentials: 'include',

            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])
    }
    catch {
        console.log("SERVER REQUEST ERROR")
    }

    if (error) {
        return error
    } else if (!isLoaded) {
        return 'LOADING...'
    } else {
        return items

    }
}


export default useFetch;