import React, { useEffect, useState } from 'react';
import styles from './HeroHeader.module.css';
import classNames from 'classnames';
import SearchBar from '../../UI/SearchBar/SearchBar';
import useFetching from '../../../hooks/useFetching';
import PhotoService from '../../../api/PhotoService';
import { defaultPhoto } from '../../../helpers/constants';
import { getRandomCategories } from '../../../helpers/utils';

const HeroHeader = () => {
    const randomTrendingSearches = getRandomCategories();

    console.log(randomTrendingSearches);

    const [currentTrendingSearches, setCurrentTrendingSearches] = useState(
        randomTrendingSearches
    );

    const [headerPhoto, setHeaderPhoto] = useState({
        photographer: '',
        src: '',
        url: '',
    });

    useEffect(() => {
        fetchPhoto();
    }, []);

    const [fetchPhoto, isLoading, error] = useFetching(async () => {
        console.log(
            `[useFetching callback] currentTrendingSearches state: ${currentTrendingSearches} `
        );

        const loadedPhotos = await PhotoService.search(
            currentTrendingSearches[0],
            {},
            1
        );

        if (loadedPhotos.length === 0) {
            setHeaderPhoto(defaultPhoto);
        } else {
            setHeaderPhoto(loadedPhotos[0]);
        }
    });

    return (
        <header className={styles.heroHeader}>
            <div className={classNames(styles.content)}>
                <h1 className={classNames(styles.text_header, 'text')}>
                    Лучшие бесплатные стоковые фото, изображения без роялти и
                    видео от талантливых авторов.
                </h1>
                <div className={classNames(styles.searchBar)}>
                    <SearchBar />
                </div>
                <div className={classNames(styles.trendingSearches)}>
                    <span
                        className={classNames(
                            styles.trendingSearchesText,
                            'text'
                        )}
                    >
                        Тенденции:
                    </span>
                    <ul className={styles.trendingSearchesList}>
                        {currentTrendingSearches.map((item, index) => (
                            <li
                                className={classNames(
                                    styles.trendingSearchesItem,
                                    'text'
                                )}
                                key={item}
                            >
                                <a
                                    className={classNames(
                                        styles.trendingSearchesLink,
                                        'link',
                                        'clickable'
                                    )}
                                    href={`search/${item}/`}
                                >
                                    {item}
                                </a>
                                {index !==
                                    currentTrendingSearches.length - 1 && (
                                    <>,&nbsp;</>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    className={classNames(
                        'text',
                        styles.attribution,
                        'link',
                        'clickable'
                    )}
                    href={headerPhoto?.url}
                    target="_blank"
                >
                    <span
                        className={classNames('text', styles.attributionLabel)}
                    >
                        Автор фото&nbsp;—
                    </span>
                    &nbsp;
                    <span
                        className={classNames('text', styles.attributionAuthor)}
                    >
                        {headerPhoto?.photographer || ''}
                    </span>
                </a>
            </div>
            <img
                className={styles.img}
                src={`${
                    headerPhoto?.src || ''
                }?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1`}
                alt="background-photo"
            />
        </header>
    );
};

export default HeroHeader;
