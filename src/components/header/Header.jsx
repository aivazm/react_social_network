import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt={'some alt'}/>
            </div>
        </header>
    );
};

export default Header;