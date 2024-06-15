import { useEffect, useState } from "react";
const basePath = "https://phenomenal-smile-1efcf2c825.strapiapp.com/api/";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(basePath + url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, error, data };
};

export default useFetch;
