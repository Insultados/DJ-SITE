import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:8080/reviews/';
const api = {
  async getItems() {
    const useFetch1 = (url: string, data: any) => {
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      try {
        useEffect(() => {
          fetch(url, {
            body: JSON.stringify(data),
            credentials: 'include',
            method: "POST",
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
        return items
    }
  },
};

function useFetch(url: string) {
  const [items, setItems] = useState<string[]>([]);

  // fetch data later use this function.
  const getItems = useCallback(() => {
    return api.getItems().then((res:any) => {
      setItems(res);
    });
  }, [url]);

  // fetch data when component mount
  useEffect(() => {
    getItems();
  }, [url]);

  return { data: items, getItems };
}



export default useFetch;