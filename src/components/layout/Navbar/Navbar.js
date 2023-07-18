import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Navbar.module.css';
import '../../../App.css';
import SearchBar from '../../UI/SearchBar/SearchBar';
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { ReactComponent as LogoWhiteIcon } from '../../../assets/logo-white.svg';

const Navbar = (props) => {
    return (
        <>
            {props.isHome ? (
                ''
            ) : (
                <div className={styles.placeholderPadding}></div>
            )}
            <div
                className={classNames(
                    styles.container,
                    props.isScrolled ? '' : styles.transparent
                )}
            >
                <nav className={styles.nav}>
                    <div className={styles.left}>
                        <NavLink
                            to="/"
                            className={classNames(styles.logo, 'clickable')}
                        >
                            {props.isScrolled ? (
                                <LogoIcon />
                            ) : (
                                <LogoWhiteIcon />
                            )}
                        </NavLink>
                        {props.isScrolled ? (
                            <SearchBar query={props.query} />
                        ) : (
                            ''
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
