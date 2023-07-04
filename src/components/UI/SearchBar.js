import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import classNames from 'classnames';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const [query, setQuery] = useState(props.query);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${query}`);
    };

    return (
        <form
            role="search"
            autoComplete="off"
            className={classNames(styles.form)}
            onSubmit={handleSubmit}
        >
            <div className={styles.container}>
                <input
                    className={styles.input}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    id="search"
                    autoCapitalize="none"
                    autoComplete="off"
                    name="search"
                    data-testid="search-input"
                    placeholder="Поиск бесплатных изображений"
                />
                <button className={styles.button}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
