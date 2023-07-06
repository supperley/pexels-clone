import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.css';
import classNames from 'classnames';
import PhotoGallery from '../components/layout/PhotoGallery';
import Navbar from '../components/layout/Navbar';
import SearchNotFound from './SearchNotFound';
import Filter from '../components/UI/FilterContainer';

const Search = (props) => {
    const { query } = useParams();
    const [noResults, setNoResults] = useState(false);
    // TODO: use Redux
    const [orientation, setOrientation] = useState('');
    const [size, setSize] = useState('');

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
                    <Filter />
                    <PhotoGallery
                        searchQuery={query}
                        handleNoResults={setNoResults}
                    />
                </main>
            )}
        </>
    );
};

export default Search;
