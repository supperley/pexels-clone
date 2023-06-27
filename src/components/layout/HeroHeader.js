import React from 'react';
import styles from './HeroHeader.module.css';
import classNames from 'classnames';
import SearchBar from '../UI/SearchBar';

const categories = ["технология", "путешествовать", "автомобиль", "лето", "еда", "офис", "бизнес", "небо", "цветы", "пляж",
    "природа", "абстрактный", "красивый", "пейзаж", "лес", "темный"]

const HeroHeader = () => {
    const randomTrendingSearches = categories
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);

    return (
        <header className={styles.heroHeader}>
            <div className={classNames(styles.content)}>
                <h1 className={classNames(styles.text_header, "text")}>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
                <div className={classNames(styles.searchBar)}>
                    <SearchBar />
                </div>
                <div className={classNames(styles.trendingSearches)}>
                    <span className={classNames(styles.trendingSearchesText, "text")}>Тенденции:</span>
                    <ul className={styles.trendingSearchesList}>
                        {randomTrendingSearches.map((item, index) => (<li className={classNames(styles.trendingSearchesItem, "text")}>
                            <a className={classNames(styles.trendingSearchesLink, "link", "clickable")} href={`search/${item}/`}>{item}</a>
                            {index !== randomTrendingSearches.length - 1 && <>,&nbsp;</>}
                        </li>))}
                    </ul>
                </div>
                <a className={classNames("text", styles.attribution, "link", "clickable")} >
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