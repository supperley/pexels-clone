import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Filter.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Filter = (props) => {
    const filterOptions = useMemo(
        () => props.filterOptions,
        [props.filterOptions]
    );
    const navigate = useNavigate();

    const [currentOption, setCurrentOption] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef();

    const handleOptionClick = (option, index) => {
        // TODO: Replace currentOption with Redux to exclude a rerender
        setCurrentOption(index);

        const queryParams = new URLSearchParams(location.search);
        console.log(`[handleOptionClick] ${queryParams}`);

        if (index) {
            queryParams.set(props.filterName, option.value);
        } else {
            if (queryParams.has(props.filterName)) {
                queryParams.delete(props.filterName);
            }
        }

        const newSearch = `${location.pathname}?${queryParams.toString()}`;
        navigate(newSearch, { replace: true });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [setIsOpen]);

    return (
        <div className={styles.filterDropdown} ref={filterRef}>
            {
                /* // TODO: Delete */ console.log(
                    `[Filter] ${JSON.stringify(filterOptions)}`
                )
            }
            <button
                className={classNames(
                    styles.filterButton,
                    currentOption && styles.filterButton_active
                )}
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
            >
                <span className="">
                    <span className={styles.filterText}>
                        {filterOptions[currentOption].name}
                    </span>
                    <svg
                        className={classNames(
                            styles.filterIcon,
                            isOpen && styles.rotateIcon
                        )}
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path d="M24 24H0V0h24v24z" fill="none"></path>
                        <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"></path>
                    </svg>
                </span>
            </button>
            <ul
                id="orientation-menu"
                role="listbox"
                aria-labelledby="orientation-label"
                tabIndex="-1"
                className={classNames(
                    styles.dropdownMenu,
                    isOpen && styles.dropdownMenuOpen
                )}
                dataset-select-dropdown="true"
            >
                {filterOptions.map((option, index) => (
                    <button
                        role="option"
                        key={`${props.filterName}-item-${index}`}
                        className={classNames(
                            styles.option,
                            styles.optionSelected
                        )}
                        onClick={() => handleOptionClick(option, index)}
                    >
                        <span className={styles.optionChildren}>
                            <span className={styles.optionText}>
                                {option?.name}
                            </span>
                            {index === currentOption && (
                                <svg
                                    className={styles.optionIcon}
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        d="M0 0h24v24H0V0z"
                                        fill="none"
                                    ></path>
                                    <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                </svg>
                            )}
                        </span>
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
