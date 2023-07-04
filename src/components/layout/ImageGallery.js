import React, { useEffect, useState } from 'react';
import styles from './ImageGallery.module.css';
import classNames from 'classnames';
import Spinner from '../UI/Spinner';
import axios from 'axios';

const ImageGallery = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [firstColumnImages, setFirstColumnImages] = useState([]);
    const [secondColumnImages, setSecondColumnImages] = useState([]);
    const [thirdColumnImages, setThirdColumnImages] = useState([]);

    const fetchImages = async () => {
        try {
            const response = await axios.get(
                `https://api.pexels.com/v1/curated?per_page=15&page=${pageNumber}`,
                {
                    headers: {
                        Authorization:
                            '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
                    },
                }
            );

            console.log('response: ', response);

            const loadedImages = response.data.photos.map((photo) => ({
                id: photo.id,
                url: photo.url,
                src: photo.src.original,
                photographer: photo.photographer,
                photographerURL: photo.photographer_url,
            }));

            const loadedImagesFirst = loadedImages.slice(
                0,
                loadedImages.length / 3
            );

            const loadedImagesSecond = loadedImages.slice(
                loadedImages.length / 3,
                (loadedImages.length / 3) * 2
            );

            const loadedImagesThird = loadedImages.slice(
                (loadedImages.length / 3) * 2,
                loadedImages.length
            );

            console.log('loadedImagesFirst', loadedImagesFirst);
            console.log('loadedImagesSecond', loadedImagesSecond);
            console.log('loadedImagesThird', loadedImagesThird);

            setFirstColumnImages((prevImages) => [
                ...prevImages,
                ...loadedImagesFirst,
            ]);
            setSecondColumnImages((prevImages) => [
                ...prevImages,
                ...loadedImagesSecond,
            ]);
            setThirdColumnImages((prevImages) => [
                ...prevImages,
                ...loadedImagesThird,
            ]);
        } catch (error) {
            console.log('Error while fetching images: ', error);
        }
        setIsLoading(false);
    };

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

            if (!isLoading && scrollTop + window.innerHeight >= offsetHeight) {
                console.log('[handleScroll] setIsLoading');
                setIsLoading(true);
                setPageNumber((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetchImages();
    }, [pageNumber]);

    return (
        <>
            <div className={styles.gridWrapper}>
                <div className={styles.column}>
                    {firstColumnImages.map((photo) => (
                        <div className={styles.imageWrapper} key={photo.id}>
                            <img
                                className={styles.image}
                                src={`${photo.src}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                                alt={photo.photographer}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.buttonGroup}>
                                    <button className={styles.buttonBookmark}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                id="collection_border-75c45573e9363c7b32ebea7827cfee9f_Path_2324"
                                                d="M0,0H24V24H0Z"
                                                fill="none"
                                            ></path>
                                            <path
                                                id="collection_border-75c45573e9363c7b32ebea7827cfee9f_Path_2325"
                                                d="M15,7V19.97l-4.21-1.81L10,17.82l-.79.34L5,19.97V7H15m4-6H8.99A2,2,0,0,0,7,3H17a2.006,2.006,0,0,1,2,2V18l2,1V3A2.006,2.006,0,0,0,19,1ZM15,5H5A2.006,2.006,0,0,0,3,7V23l7-3,7,3V7A2.006,2.006,0,0,0,15,5Z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        className={styles.buttonLike}
                                        /*onClick={() => handleLike(image.id)}*/
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                id="favorite_border-bcbe810b1c8684d420b21248b530177d_Tracé_2228"
                                                d="M19.519,9.6A5.717,5.717,0,0,0,14,4.858h0a5.238,5.238,0,0,0-1.8.278A5.692,5.692,0,0,0,9.616,6.8l-.1-.116a5.377,5.377,0,0,0-4.229-1.85,4.188,4.188,0,0,0-.481.019A5.451,5.451,0,0,0,1.057,6.8,6.306,6.306,0,0,0,.035,13.032a13.481,13.481,0,0,0,2.558,4.048,35.618,35.618,0,0,0,6.85,5.754.31.31,0,0,0,.173.058.27.27,0,0,0,.173-.058,36.676,36.676,0,0,0,5.47-4.276A18.5,18.5,0,0,0,18.636,14.4,7.4,7.4,0,0,0,19.519,9.6Zm-2.753,3.753a15.6,15.6,0,0,1-3.057,3.724,36.039,36.039,0,0,1-4.1,3.379,33.6,33.6,0,0,1-5.322-4.64,10.684,10.684,0,0,1-2.183-3.225,3.947,3.947,0,0,1,.487-4.367,2.955,2.955,0,0,1,2.38-1.222H5.3A4.416,4.416,0,0,1,8.53,8.741l.077.1.039.039,1.04,1.117.982-1.155a5.186,5.186,0,0,1,2.014-1.58A4.432,4.432,0,0,1,14,7.006a3.486,3.486,0,0,1,3.426,2.857A5.088,5.088,0,0,1,16.765,13.357Z"
                                                transform="translate(2.375 -1.865)"
                                            ></path>
                                        </svg>
                                        {/* {!likes[image.id] ? (
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path id="favorite_border-bcbe810b1c8684d420b21248b530177d_Tracé_2228" d="M19.519,9.6A5.717,5.717,0,0,0,14,4.858h0a5.238,5.238,0,0,0-1.8.278A5.692,5.692,0,0,0,9.616,6.8l-.1-.116a5.377,5.377,0,0,0-4.229-1.85,4.188,4.188,0,0,0-.481.019A5.451,5.451,0,0,0,1.057,6.8,6.306,6.306,0,0,0,.035,13.032a13.481,13.481,0,0,0,2.558,4.048,35.618,35.618,0,0,0,6.85,5.754.31.31,0,0,0,.173.058.27.27,0,0,0,.173-.058,36.676,36.676,0,0,0,5.47-4.276A18.5,18.5,0,0,0,18.636,14.4,7.4,7.4,0,0,0,19.519,9.6Zm-2.753,3.753a15.6,15.6,0,0,1-3.057,3.724,36.039,36.039,0,0,1-4.1,3.379,33.6,33.6,0,0,1-5.322-4.64,10.684,10.684,0,0,1-2.183-3.225,3.947,3.947,0,0,1,.487-4.367,2.955,2.955,0,0,1,2.38-1.222H5.3A4.416,4.416,0,0,1,8.53,8.741l.077.1.039.039,1.04,1.117.982-1.155a5.186,5.186,0,0,1,2.014-1.58A4.432,4.432,0,0,1,14,7.006a3.486,3.486,0,0,1,3.426,2.857A5.088,5.088,0,0,1,16.765,13.357Z" transform="translate(2.375 -1.865)"></path>
                                </svg>
                                ) : (
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path id="favorite_border-bcbe810b1c8684d420b21248b530177d_Tracé_2228" d="M19.519,9.6A5.717,5.717,0,0,0,14,4.858h0a5.238,5.238,0,0,0-1.8.278A5.692,5.692,0,0,0,9.616,6.8l-.1-.116a5.377,5.377,0,0,0-4.229-1.85,4.188,4.188,0,0,0-.481.019A5.451,5.451,0,0,0,1.057,6.8,6.306,6.306,0,0,0,.035,13.032a13.481,13.481,0,0,0,2.558,4.048,35.618,35.618,0,0,0,6.85,5.754.31.31,0,0,0,.173.058.27.27,0,0,0,.173-.058,36.676,36.676,0,0,0,5.47-4.276A18.5,18.5,0,0,0,18.636,14.4,7.4,7.4,0,0,0,19.519,9.6Zm-2.753,3.753a15.6,15.6,0,0,1-3.057,3.724,36.039,36.039,0,0,1-4.1,3.379,33.6,33.6,0,0,1-5.322-4.64,10.684,10.684,0,0,1-2.183-3.225,3.947,3.947,0,0,1,.487-4.367,2.955,2.955,0,0,1,2.38-1.222H5.3A4.416,4.416,0,0,1,8.53,8.741l.077.1.039.039,1.04,1.117.982-1.155a5.186,5.186,0,0,1,2.014-1.58A4.432,4.432,0,0,1,14,7.006a3.486,3.486,0,0,1,3.426,2.857A5.088,5.088,0,0,1,16.765,13.357Z" transform="translate(2.375 -1.865)"></path>
                                </svg>
                            )} */}
                                    </button>
                                </div>
                                <button className={styles.buttonDownload}>
                                    <a
                                        download
                                        target="_blank"
                                        href={`${photo.src}?cs=srgb&fm=jpg&dl=`}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <g>
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                ></rect>
                                            </g>
                                            <g>
                                                <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </button>
                                <a
                                    title={photo.photographer}
                                    className={classNames(
                                        styles.avatar,
                                        'link'
                                    )}
                                    href={photo.photographerURL}
                                >
                                    <p
                                        className={classNames(
                                            styles.avatarName,
                                            'text'
                                        )}
                                    >
                                        {photo.photographer}
                                    </p>
                                </a>
                            </div>
                        </div>
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

export default ImageGallery;
