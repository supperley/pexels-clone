import React from 'react';
import styles from './HeroHeader.module.css';
import classNames from 'classnames';
import SearchBar from '../UI/SearchBar';

const HeroHeader = () => {
    return (
        <header className={classNames(styles.heroHeader, "spacing_noMargin", "spacing_padding-bottom-80", "spacing_padding-top-80", "spacing_padding-left-15", "spacing_padding-right-15")}>
            <div className={classNames(styles.content, "spacing_padding-top-50")}>
                <h1 className={classNames("text", "text_size-h33", "text_color-whiteFFFFFF", "spacing_noMargin")}>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
                <SearchBar />
                <div className={classNames(styles.trendingSearches, "spacing_margin-top-30")}>
                    <span class={classNames(styles.trendingSearchesText, "text", "text_size-p16", "text_weight-semibold", "text_color-whiteFFFFFF", "spacing_noMargin", "spacing_margin-right-8")}>Тенденции:</span>
                    <ul class={styles.trendingSearchesList}>
                        <li>
                            <a class={classNames("text", "text_size-p16", "text_weight-semibold", "text_color-whiteFFFFFF", "clickable", "spacing_noMargin", "text-inline")} href="/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C/">
                                <span class={classNames("text", "text_size-inherit", "spacing_noMargin", "text-inline")}>автомобиль</span>
                            </a>
                            <span class={classNames("text", "text_size-p16", "text_weight-semibold", "text_color-whiteFFFFFF", "spacing_noMargin", "text-inline")}>,&nbsp;</span>
                        </li>
                        <li>
                            <a class={classNames(styles.ellipsis, "clickable", "spacing_noMargin", "spacing_margin-left-8")} href="/ru-ru/popular-searches/">
                                <svg class={classNames("icon_color-whiteFFFFFF", "spacing_noMargin")} viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <a class={classNames("text", "text_weight-semibold", "text_color-whiteFFFFFF", "spacing_noMargin", "text-inline", "clickable", "text_size-p14", styles.attribution, "link")} href="https://www.pexels.com/ru-ru/photo/16736610/">
                    <p class={classNames("text", "text_size-inherit", "text_size-inherit-mobile", "text_weight-inherit", "text_color-inherit", "spacing_noMargin", "text_inline")}>
                        <span class={classNames("text", "text_size-inherit", "text_size-inherit-mobile", "text_color-inherit", "spacing_noMargin", "text-inline", styles.attributionLabel)}>Автор фото&nbsp;—</span>
                        &nbsp;
                        <span class={classNames("text", "text_size-inherit", "text_size-inherit-mobile", "text_color-inherit", "spacing_noMargin", "text-inline")}>Rodion Kutsaiev</span>
                    </p>
                </a>
            </div>
            <img className={styles.img} src="https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1" alt="background-image" />
        </header >
    );
};

export default HeroHeader;