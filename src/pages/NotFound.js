import React from 'react';
import Navbar from '../components/layout/Navbar';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <>
            <Navbar isScrolled={true} />
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="3.2"></circle>
                                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                                </svg>
                            </i>
                            Откройте для себя бесплатные
                            <strong>
                                &nbsp;<a href="/">фото</a>&nbsp;
                            </strong>
                        </li>
                        <li>
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                </svg>
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
