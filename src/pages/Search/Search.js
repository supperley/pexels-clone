import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import classNames from 'classnames';
import PhotoGallery from '../../components/layout/PhotoGallery/PhotoGallery';
import Navbar from '../../components/layout/Navbar/Navbar';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import Filter from '../../components/UI/FilterContainer/FilterContainer';
import { useDispatch } from 'react-redux';
import { setOrientationFilter, setSizeFilter } from '../../store/filterSlice';

const Search = (props) => {
    const { query } = useParams();
    let [searchParams] = useSearchParams();
    const [noResults, setNoResults] = useState(false);
    // TODO: Fix first render effect?
    const isFirstRender = useRef(true);
    const [galleryKey, setGalleryKey] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        console.log('[Search] isLoading true');
        setIsLoading(true);
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            console.log(
                '[Search] useEffect() params changed, reload PhotoGallery...',
                query
            );

            setGalleryKey((prevKey) => prevKey + 1); // Gallery force update
        }

        if (searchParams) {
            let size = searchParams?.get('size'),
                orientation = searchParams?.get('orientation');

            console.log(
                `[Search] size = ${size}, orientation = ${orientation}`
            );

            if (size) dispatch(setSizeFilter(size));
            if (orientation) dispatch(setOrientationFilter(orientation));
        }

        setIsLoading(false);
    }, [query, searchParams]);

    return (
        <>
            <Navbar isScrolled query={query} />
            {noResults ? (
                <SearchNotFound query={query} />
            ) : (
                <main className={styles.searchWrapper}>
                    <h1 className={classNames(styles.searchHeader, 'text')}>
                        {query}
                    </h1>
                    {!isLoading && <Filter />}
                    <PhotoGallery
                        key={galleryKey}
                        searchQuery={query}
                        searchParams={searchParams}
                        handleNoResults={setNoResults}
                    />
                </main>
            )}
        </>
    );
};

export default Search;
