import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        // If can't get data in 5 seconds, abort.
        const id = setTimeout(() => abortCont.abort(), 5000);

        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error('Could not fetch the data for that resource.');
                }
            })
            .then(data => {
                setPosts(data);
                setIsPending(false);
                setError(null);
                clearTimeout(id);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted, wait too long to fetch data');
                    clearTimeout(id);
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

    }, [url]);

    return { posts, isPending, error };
}
 
export default useFetch;