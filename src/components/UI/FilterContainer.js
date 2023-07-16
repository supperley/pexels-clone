import React, { useState } from 'react';
import styles from './FilterContainer.module.css';
import classNames from 'classnames';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setOrientationFilter, setSizeFilter } from '../../store/filterSlice';

const orientationOptions = [
    { value: 'all', name: 'Все варианты ориентации' },
    { value: 'landscape', name: 'Горизонтальная' },
    { value: 'portrait', name: 'Вертикальная' },
    { value: 'square', name: 'Квадратное изображение' },
];

const sizeOptions = [
    { value: 'all', name: 'Все размеры' },
    { value: 'large', name: 'Большой' },
    { value: 'medium', name: 'Средний' },
    { value: 'small', name: 'Маленький' },
];

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
                        <svg
                            className={classNames(
                                styles.filtersIcon,
                                filterContainerOpen && styles.rotateIcon
                            )}
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M10.778,18.955h4.444V16.732H10.778ZM3,7V9.222H23V7Zm3.333,7.088H19.667V11.866H6.333Z"
                                transform="translate(-1 -1)"
                            ></path>
                        </svg>
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
