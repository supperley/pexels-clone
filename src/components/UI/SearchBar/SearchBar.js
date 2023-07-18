import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import classNames from 'classnames';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

const SearchBar = (props) => {
    const [query, setQuery] = useState(props.query);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query && query?.trim()) {
            navigate(`/search/${query}`, { replace: true });
            window.location.reload();
        }
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
                <button className={styles.button} type="submit">
                    <SearchIcon />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
