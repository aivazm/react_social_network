import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.layer1}>
                <img src={logo} alt={'some alt'}/>
            </div>
            <div className={classes.layer2}>
                <h1>Зулейха видит барана</h1>
            </div>
        </header>
    );
};

export default Header;