import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import classNames from 'classnames';
import PhotoGallery from '../components/layout/PhotoGallery';
import Navbar from '../components/layout/Navbar';
import SearchNotFound from './SearchNotFound';
import Filter from '../components/UI/FilterContainer';

const Search = (props) => {
    const { query } = useParams();
    let [searchParams] = useSearchParams();
    const [noResults, setNoResults] = useState(false);
    const [galleryKey, setGalleryKey] = useState(0);

    useEffect(() => {
        console.log(
            '[Search] useEffect() params changed, reload PhotoGallery...',
            query,
            searchParams
        );
        // TODO: Fix rerender (searchParams)
        //setGalleryKey((prevKey) => prevKey + 1); // Gallery force update
    }, [query, searchParams]);

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
                    {/* <PhotoGallery
                        key={galleryKey}
                        searchQuery={query}
                        searchParams={searchParams}
                        handleNoResults={setNoResults}
                    /> */}
                </main>
            )}
        </>
    );
};

export default Search;
