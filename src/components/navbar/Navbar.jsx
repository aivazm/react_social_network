import React from 'react';
import './Navbar.module.css';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                Profile
            </div>
            <div className={classes.item}>
                Messages
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>
            <p/>
            <div className={`${classes.item} ${classes.active}`}>
                 Settings
            </div>
        </nav>
    );
};

export default Navbar;