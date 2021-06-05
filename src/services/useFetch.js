import { useEffect, useState } from "react";
import api from "./api";

export const useFetch = (options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await api(options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [options]);

  return { response, loading, error };
};
