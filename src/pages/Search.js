import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.css';
import classNames from 'classnames';
import ImageGallery from '../components/layout/ImageGallery';

const Search = (props) => {
    const { query } = useParams();

    return (
        <>
            <main className={styles.searchWrapper}>
                <h1 className={classNames(styles.searchHeader, "text")}>{query}</h1>
                <ImageGallery />
            </main>
        </>
    );
};

export default Search;
