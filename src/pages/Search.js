import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [query, setQuery] = useState(searchParams.get('query'));
    return <div>{query}</div>;
};

export default Search;
