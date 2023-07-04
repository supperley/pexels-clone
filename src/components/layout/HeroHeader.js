import React, { useEffect, useState } from 'react';
import styles from './HeroHeader.module.css';
import classNames from 'classnames';
import SearchBar from '../UI/SearchBar';
import useFetching from '../../hooks/useFetching';
import PhotoService from '../../api/PhotoService';

const categories = [
    '35 мм',
    '4 июля',
    'абстрактный',
    'автомобиль',
    'аналоговая',
    'архитектура',
    'баланс',
    'бездорожье',
    'бизнес',
    'веселье',
    'вода',
    'гора',
    'город',
    'досуг',
    'еда',
    'живописный',
    'здание',
    'комната',
    'космос',
    'костюмы',
    'красивый',
    'лес',
    'лето',
    'мебель',
    'музей',
    'небо',
    'облака',
    'отражение',
    'офис',
    'пейзаж',
    'пляж',
    'природа',
    'путешествовать',
    'современный',
    'темный',
    'технология',
    'фотосессия',
    'футуристический',
    'цветы',
    'шаг',
];

const HeroHeader = () => {
    const [randomTrendingSearches, setRandomTrendingSearches] = useState([]);
    const [headerPhoto, setHeaderPhoto] = useState({
        photographer: '',
        src: '',
        url: '',
    });

    useEffect(() => {
        const sortedCategories = categories
            .sort(() => Math.random() - 0.5)
            .slice(0, 7);
        console.log(`sortedCategories ${sortedCategories}`);

        setRandomTrendingSearches(sortedCategories);
    }, []);

    useEffect(() => {
        console.log(
            `setState completed, randomTrendingSearches: ${randomTrendingSearches} `
        );
        if (randomTrendingSearches.length > 0) {
            fetchPhoto();
        }
    }, [randomTrendingSearches]);

    const [fetchPhoto, isLoading, error] = useFetching(async () => {
        console.log(
            `HeroHeader callback, randomTrendingSearches: ${randomTrendingSearches} `
        );

        const loadedPhotos = await PhotoService.search(
            randomTrendingSearches[0],
            1,
            1
        );

        console.log(loadedPhotos);

        setHeaderPhoto(loadedPhotos[0]);
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
                        {randomTrendingSearches.map((item, index) => (
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
                                    randomTrendingSearches.length - 1 && (
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
