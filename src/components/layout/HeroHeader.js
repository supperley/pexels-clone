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
    const randomTrendingSearches = categories
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);

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
            setHeaderPhoto({
                id: 9427143,
                url: 'https://www.pexels.com/photo/classic-car-on-dirt-road-near-tree-9427143/',
                src: 'https://images.pexels.com/photos/9427143/pexels-photo-9427143.jpeg',
                photographer: 'Mr Dark_space',
                photographerURL:
                    'https://www.pexels.com/@mr-dark_space-84743911',
            });
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
