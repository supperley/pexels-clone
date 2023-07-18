import React, { useEffect, useRef, useState } from 'react';
import styles from './Filter.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import FilterButton from '../FilterButton/FilterButton';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';

const Filter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef();
    const navigate = useNavigate();

    const filterOptions = props.filterOptions;
    const getValueName = (value) => {
        const option = filterOptions.find((option) => option.value === value);
        return option ? option.name : '';
    };

    const handleOptionClick = (option, index) => {
        props.onOptionChange(option.value);

        const queryParams = new URLSearchParams(location.search);
        console.log(`[Filter] (handleOptionClick) ${queryParams}`);

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
            <button
                className={classNames(
                    styles.filterButton,
                    props.currentOption != 'all' && styles.filterButton_active
                )}
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
            >
                <span className="">
                    <span className={styles.filterText}>
                        {getValueName(props.currentOption)}
                    </span>
                    <div
                        className={classNames(
                            styles.filterIcon,
                            isOpen && styles.rotateIcon
                        )}
                    >
                        <ArrowIcon />
                    </div>
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
                    <FilterButton
                        key={index}
                        option={option}
                        index={index}
                        filterName={props.filterName}
                        currentOption={props.currentOption}
                        handleOptionClick={handleOptionClick}
                    ></FilterButton>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
