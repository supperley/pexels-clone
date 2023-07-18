import React from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
import styles from './NotFound.module.css';
import { ReactComponent as PhotoIcon } from '../../assets/photo.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';

const NotFound = () => {
    return (
        <>
            <Navbar isScrolled />
            <main className={styles.notFoundWrapper}>
                <div>
                    <h1 className={styles.notFoundTitle}>
                        Ой, мы не нашли страницу.
                    </h1>
                    <h2 className={styles.notFoundSubtitle}>
                        Эти ссылки могут пригодиться:
                    </h2>
                    <br></br>
                    <br></br>
                    <ul className={styles.notFoundList}>
                        <li>
                            <i>
                                <PhotoIcon />
                            </i>
                            Откройте для себя бесплатные
                            <strong>
                                &nbsp;<a href="/">фото</a>&nbsp;
                            </strong>
                        </li>
                        <li>
                            <i>
                                <MailIcon />
                            </i>
                            Если вы считаете, что это ошибка,
                            <strong>
                                &nbsp;
                                <a href="mailto:hello@pexels.com?subject=Error 404&amp;body=URL: /404?locale=ru-RU Please describe how you got this error:">
                                    свяжитесь с нами
                                </a>
                            </strong>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default NotFound;
