import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Filter.module.css';
import classNames from 'classnames';

const Filter = (props) => {
    const options = useMemo(() => props.filterOptions, [props.filterOptions]);

    const [currentOption, setCurrentOption] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef();

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
                        {options[currentOption]}
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
                {console.log(options)}
                {options.map((option, index) => (
                    <button
                        role="option"
                        key={`${props.filterName}-item-${index}`}
                        className={classNames(
                            styles.option,
                            styles.optionSelected
                        )}
                        onClick={() => {
                            setCurrentOption(index);
                            if (index) {
                                // TODO: use Redux
                                // Navigate(
                                //     `/search/${query}/?${props.filterName}=${option.value}`,
                                //     { replace: true }
                                // );
                                // window.location.reload();
                            }
                        }}
                    >
                        <span className={styles.optionChildren}>
                            <span className={styles.optionText}>{option}</span>
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
