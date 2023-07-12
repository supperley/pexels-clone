import React, { useCallback } from 'react';
import styles from './Photo.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../store/photosSlice';

const Photo = (props) => {
    const liked = useSelector((state) => state.photos.liked);
    const dispatch = useDispatch();

    const handleLike = useCallback(() => {
        if (liked.includes(props.photo.id)) {
            dispatch(removeLike(props.photo.id));
        } else {
            dispatch(addLike(props.photo.id));
        }
    }, [liked, dispatch, props.photo.id]);

    return (
        <article className={styles.photoWrapper}>
            <img
                className={styles.photo}
                src={`${props.photo.src}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                alt={props.photo.photographer}
            />
            <div className={styles.overlay}>
                <div className={styles.buttonGroup}>
                    <button className={styles.buttonBookmark}>
                        <svg viewBox="0 0 24 24" width="24" height="24">
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
                        className={classNames(
                            styles.buttonLike,
                            liked.includes(props.photo.id) &&
                                styles.buttonLike_liked
                        )}
                        onClick={() => handleLike(props.photo.id)}
                    >
                        {!liked.includes(props.photo.id) ? (
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    d="M19.519,9.6A5.717,5.717,0,0,0,14,4.858h0a5.238,5.238,0,0,0-1.8.278A5.692,5.692,0,0,0,9.616,6.8l-.1-.116a5.377,5.377,0,0,0-4.229-1.85,4.188,4.188,0,0,0-.481.019A5.451,5.451,0,0,0,1.057,6.8,6.306,6.306,0,0,0,.035,13.032a13.481,13.481,0,0,0,2.558,4.048,35.618,35.618,0,0,0,6.85,5.754.31.31,0,0,0,.173.058.27.27,0,0,0,.173-.058,36.676,36.676,0,0,0,5.47-4.276A18.5,18.5,0,0,0,18.636,14.4,7.4,7.4,0,0,0,19.519,9.6Zm-2.753,3.753a15.6,15.6,0,0,1-3.057,3.724,36.039,36.039,0,0,1-4.1,3.379,33.6,33.6,0,0,1-5.322-4.64,10.684,10.684,0,0,1-2.183-3.225,3.947,3.947,0,0,1,.487-4.367,2.955,2.955,0,0,1,2.38-1.222H5.3A4.416,4.416,0,0,1,8.53,8.741l.077.1.039.039,1.04,1.117.982-1.155a5.186,5.186,0,0,1,2.014-1.58A4.432,4.432,0,0,1,14,7.006a3.486,3.486,0,0,1,3.426,2.857A5.088,5.088,0,0,1,16.765,13.357Z"
                                    transform="translate(2.375 -1.865)"
                                ></path>
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    d="M19.519,9.6A5.717,5.717,0,0,0,14,4.858h0a5.238,5.238,0,0,0-1.8.278A5.692,5.692,0,0,0,9.616,6.8l-.1-.116a5.377,5.377,0,0,0-4.229-1.85,4.188,4.188,0,0,0-.481.019A5.451,5.451,0,0,0,1.057,6.8,6.306,6.306,0,0,0,.035,13.032a13.481,13.481,0,0,0,2.558,4.048,35.618,35.618,0,0,0,6.85,5.754.31.31,0,0,0,.173.058.27.27,0,0,0,.173-.058,36.676,36.676,0,0,0,5.47-4.276A18.5,18.5,0,0,0,18.636,14.4,7.4,7.4,0,0,0,19.519,9.6Z"
                                    transform="translate(2.375 -1.865)"
                                    fill="#d3405c"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
                <button className={styles.buttonDownload}>
                    <a
                        download
                        target="_blank"
                        href={`${props.photo.src}?cs=srgb&fm=jpg&dl=`}
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <g>
                                <rect fill="none" height="24" width="24"></rect>
                            </g>
                            <g>
                                <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"></path>
                            </g>
                        </svg>
                    </a>
                </button>
                <a
                    title={props.photo.photographer}
                    className={classNames(styles.avatar, 'link')}
                    href={props.photo.photographerURL}
                    target="_blank"
                >
                    <p className={classNames(styles.avatarName, 'text')}>
                        {props.photo.photographer}
                    </p>
                </a>
            </div>
        </article>
    );
};

export default Photo;
