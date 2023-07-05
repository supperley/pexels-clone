import React, { useState } from 'react';
import styles from './FilterContainer.module.css';
import classNames from 'classnames';
import Filter from './Filter';

const orientationOptions = [
    'Все варианты ориентации',
    'Горизонтальная',
    'Вертикальная',
    'Квадратное изображение',
];

const sizeOptions = ['Все размеры', 'Большой', 'Средний', 'Маленький'];

const FilterContainer = () => {
    const [filterContainerOpen, setFilterContainerOpen] = useState(false);

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
                ></Filter>
                <Filter filterOptions={sizeOptions} filterName="size"></Filter>
            </div>
        </>
    );
};

export default FilterContainer;
