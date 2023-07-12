import { useRef, useState } from 'react';

const useFetching = (callback) => {
    const isLoading = useRef(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        console.log('[useFetching] Fetching...');
        try {
            isLoading.current = true;
            await callback();
        } catch (error) {
            setError('Error while fetching: ', error);
        }

        isLoading.current = false;
    };

    return [fetching, isLoading, error];
};

export default useFetching;
