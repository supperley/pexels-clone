import React, { useEffect, useState } from 'react';
import styles from './PhotoGallery.module.css';
import Spinner from '../UI/Spinner';
import useFetching from '../../hooks/useFetching';
import PhotoService from '../../api/PhotoService';
import Photo from './Photo';

const PhotoGallery = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [firstColumnPhotos, setFirstColumnPhotos] = useState([]);
    const [secondColumnPhotos, setSecondColumnPhotos] = useState([]);
    const [thirdColumnPhotos, setThirdColumnPhotos] = useState([]);
    const [isEnd, setIsEnd] = useState(false);

    const [fetchPhotos, isLoading, error] = useFetching(async () => {
        const loadedPhotos = props.searchQuery
            ? await PhotoService.search(props.searchQuery, pageNumber, 15)
            : await PhotoService.getCurated(pageNumber);

        if (loadedPhotos.length === 0) {
            if (pageNumber === 1) {
                props?.handleNoResults(true);
            }
            setIsEnd(true);
        }

        console.log(
            `loadedPhotos.length: ${loadedPhotos.length}, loadedPhotos: ${loadedPhotos}, isEnd: ${isEnd}`
        );

        const loadedPhotosFirst = loadedPhotos.slice(
            0,
            loadedPhotos.length / 3
        );

        const loadedPhotosSecond = loadedPhotos.slice(
            loadedPhotos.length / 3,
            (loadedPhotos.length / 3) * 2
        );

        const loadedPhotosThird = loadedPhotos.slice(
            (loadedPhotos.length / 3) * 2,
            loadedPhotos.length
        );

        console.log('loadedPhotosFirst', loadedPhotosFirst);
        console.log('loadedPhotosSecond', loadedPhotosSecond);
        console.log('loadedPhotosThird', loadedPhotosThird);

        setFirstColumnPhotos((prevPhotos) => [
            ...prevPhotos,
            ...loadedPhotosFirst,
        ]);
        setSecondColumnPhotos((prevPhotos) => [
            ...prevPhotos,
            ...loadedPhotosSecond,
        ]);
        setThirdColumnPhotos((prevPhotos) => [
            ...prevPhotos,
            ...loadedPhotosThird,
        ]);
    });

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, offsetHeight } = document.documentElement;

            console.log(
                `[handleScroll] scrollTop: ${scrollTop}, innerHeight: ${
                    window.innerHeight
                }, offsetHeight: ${offsetHeight} (${
                    scrollTop + window.innerHeight
                } >= ${offsetHeight})`
            );

            if (
                !isLoading &&
                !isEnd &&
                scrollTop + window.innerHeight >= offsetHeight - 1
            ) {
                console.log(`[handleScroll] setPageNumber, isEnd: ${isEnd}`);
                setPageNumber((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isEnd]);

    useEffect(() => {
        fetchPhotos();
    }, [pageNumber]);

    return (
        <>
            <div className={styles.gridWrapper}>
                <div className={styles.column}>
                    {firstColumnPhotos.map((photo) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </div>
                <div className={styles.column}>
                    {secondColumnPhotos.map((photo) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </div>
                <div className={styles.column}>
                    {thirdColumnPhotos.map((photo) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </div>
            </div>
            {isLoading && (
                <div className={styles.loadingContainer}>
                    <Spinner animation="border" role="status" />
                </div>
            )}
        </>
    );
};

export default PhotoGallery;
