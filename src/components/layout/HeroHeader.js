import React from 'react';
import styles from './HeroHeader.module.css';
import classNames from 'classnames';
import SearchBar from '../UI/SearchBar';

const HeroHeader = () => {
    return (
        <header className={styles.heroHeader}>
            <div className={classNames(styles.content)}>
                <h1 className={classNames(styles.text_header, "text")}>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
                <SearchBar />
                <div className={classNames(styles.trendingSearches)}>
                    <span className={classNames(styles.trendingSearchesText, "text")}>Тенденции:</span>
                    <ul className={styles.trendingSearchesList}>
                        <li className={classNames(styles.trendingSearchesItem, "text", "clickable")}>автомобиль,
                        </li>
                        <li className={classNames(styles.ellipsis, "clickable")} /*href="/ru-ru/popular-searches/"*/>
                            <svg className={"icon_color-whiteFFFFFF"} viewBox="0 0 24 24" width="24" height="24">
                                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <a className={classNames("text", styles.attribution, "link", "clickable")} href="https://www.pexels.com/ru-ru/photo/16736610/">
                    <span className={classNames("text", styles.attributionLabel)}>Автор фото&nbsp;—</span>
                    &nbsp;
                    <span className={classNames("text", styles.attributionAuthor)}>Rodion Kutsaiev</span>
                </a>
            </div>
            <img className={styles.img} src="https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1" alt="background-image" />
        </header >
    );
};

export default HeroHeader;