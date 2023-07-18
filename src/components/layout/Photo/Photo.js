import React, { useCallback } from 'react';
import styles from './Photo.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../../store/photosSlice';
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg';
import { ReactComponent as BookmarkIcon } from '../../../assets/bookmark.svg';
import { ReactComponent as LikeIcon } from '../../../assets/like.svg';
import { ReactComponent as LikeFilledIcon } from '../../../assets/like-filled.svg';

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
                        <BookmarkIcon />
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
                            <LikeIcon />
                        ) : (
                            <LikeFilledIcon />
                        )}
                    </button>
                </div>
                <button className={styles.buttonDownload}>
                    <a
                        download
                        target="_blank"
                        href={`${props.photo.src}?cs=srgb&fm=jpg&dl=`}
                    >
                        <DownloadIcon />
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
