import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import styles from './NotFound.module.css';

const NotFound = (props) => {
    const pathname = useLocation()?.pathname;

    return (
        <>
            <Navbar isScrolled={true} query={pathname} />
            <main className={styles.notFoundWrapper}>
                <div>
                    <h1 className={styles.notFoundHeader}>
                        Нет результатов по запросу «
                        <span className={styles.searchTitle}>{pathname}</span>».
                        <span className={classNames('text')}>
                            Попробуйте уточнить поисковой запрос.
                        </span>
                    </h1>
                    <div className={styles.buttonGroup}>
                        <a
                            className={classNames(
                                styles.buttonBlack,
                                styles.button
                            )}
                            href="/"
                        >
                            <span>На главную страницу</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NotFound;
