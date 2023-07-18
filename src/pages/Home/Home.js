import React, { useEffect, useState } from 'react';
import HeroHeader from '../../components/layout/HeroHeader/HeroHeader';
import classNames from 'classnames';
import PhotoGallery from '../../components/layout/PhotoGallery/PhotoGallery';
import styles from './Home.module.css';
import Navbar from '../../components/layout/Navbar/Navbar';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar isScrolled={isScrolled} isHome />
            <HeroHeader />
            <main className={styles.photoGalleryWrapper}>
                <h4 className={classNames(styles.photoGalleryHeader, 'text')}>
                    Бесплатные стоковые фото
                </h4>
                <PhotoGallery />
            </main>
        </>
    );
};

export default Home;
