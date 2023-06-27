import React from 'react';
import HeroHeader from '../components/layout/HeroHeader';
import classNames from 'classnames';
import ImageGallery from '../components/layout/ImageGallery';
import styles from './Home.module.css';

const Main = () => {
    return (
        <>
            <HeroHeader />
            <main className={styles.imageGalleryWrapper}>
                <h4 className={classNames(styles.imageGalleryHeader, "text")}>Бесплатные стоковые фото</h4>
                <ImageGallery />
            </main>
        </>
    );
};

export default Main;
