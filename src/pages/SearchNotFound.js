import classNames from 'classnames';
import styles from './SearchNotFound.module.css';

const SearchNotFound = (props) => {
    return (
        <main className={styles.notFoundWrapper}>
            <div>
                <h1 className={styles.notFoundHeader}>
                    Нет результатов по запросу «
                    <span className={styles.searchTitle}>{props.query}</span>».
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
    );
};

export default SearchNotFound;
