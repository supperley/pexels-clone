import { Fragment } from 'react';
import styles from './Layout.module.css';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    );
};

export default Layout;
