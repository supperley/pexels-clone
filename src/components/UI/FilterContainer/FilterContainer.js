import React, { useState } from 'react';
import styles from './FilterContainer.module.css';
import classNames from 'classnames';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
    setOrientationFilter,
    setSizeFilter,
} from '../../../store/filterSlice';
import { orientationOptions, sizeOptions } from '../../../helpers/constants';
import { ReactComponent as FilterIcon } from '../../../assets/filter.svg';

const FilterContainer = () => {
    const [filterContainerOpen, setFilterContainerOpen] = useState(false);

    const dispatch = useDispatch();

    const sizeFilter = useSelector((state) => state.filter.size);
    const orientationFilter = useSelector((state) => state.filter.orientation);

    const handleSizeChange = (size) => {
        dispatch(setSizeFilter(size)); // Обновление фильтра размера
    };

    const handleOrientationChange = (orientation) => {
        dispatch(setOrientationFilter(orientation)); // Обновление фильтра ориентации
    };

    const handleClearFilters = () => {
        dispatch(clearFilters()); // Очистка фильтров
    };

    return (
        <>
            <div className={styles.filtersWrapper}>
                <button
                    className={styles.filtersButton}
                    onClick={() => {
                        setFilterContainerOpen((prev) => !prev);
                    }}
                >
                    <span>
                        <div
                            className={classNames(
                                styles.filtersIcon,
                                filterContainerOpen && styles.rotateIcon
                            )}
                        >
                            <FilterIcon />
                        </div>
                        <span className={styles.filtersButtonText}>
                            Фильтры
                        </span>
                    </span>
                </button>
            </div>
            <div
                className={classNames(
                    styles.filtersListContainer,
                    !filterContainerOpen && styles.filtersListContainerHidden
                )}
            >
                <Filter
                    filterOptions={orientationOptions}
                    filterName="orientation"
                    currentOption={orientationFilter}
                    onOptionChange={handleOrientationChange}
                ></Filter>
                <Filter
                    filterOptions={sizeOptions}
                    filterName="size"
                    currentOption={sizeFilter}
                    onOptionChange={handleSizeChange}
                ></Filter>
            </div>
        </>
    );
};

export default FilterContainer;
