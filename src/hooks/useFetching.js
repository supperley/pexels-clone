import { useState } from 'react';

const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        console.log('[useFetching] Fetching...');
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError('Error while fetching: ', error);
        }

        setIsLoading(false);
    };

    return [fetching, isLoading, error];
};

export default useFetching;
