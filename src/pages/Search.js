import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.css';
import classNames from 'classnames';
import ImageGallery from '../components/layout/ImageGallery';
import Navbar from '../components/layout/Navbar';
import SearchNotFound from './SearchNotFound';

const Search = (props) => {
    const { query } = useParams();
    const [noResults, setNoResults] = useState(false);

    return (
        <>
            <Navbar isScrolled={true} query={query} />
            {noResults ? (
                <SearchNotFound query={query} />
            ) : (
                <main className={styles.searchWrapper}>
                    <h1 className={classNames(styles.searchHeader, 'text')}>
                        {query}
                    </h1>
                    <ImageGallery
                        searchQuery={query}
                        handleNoResults={setNoResults}
                    />
                </main>
            )}
        </>
    );
};

export default Search;
