import classNames from 'classnames';
import React from 'react';
import styles from './FilterButton.module.css';
import { ReactComponent as CheckIcon } from '../../../assets/check.svg';

const FilterButton = (props) => {
    return (
        <button
            role="option"
            key={`${props.filterName}-item-${props.index}`}
            className={classNames(styles.option, styles.optionSelected)}
            onClick={() => props.handleOptionClick(props.option, props.index)}
        >
            <span className={styles.optionChildren}>
                <span className={styles.optionText}>{props.option?.name}</span>
                {props.option?.value === props.currentOption && (
                    <div className={styles.optionIcon}>
                        <CheckIcon />
                    </div>
                )}
            </span>
        </button>
    );
};

export default FilterButton;
