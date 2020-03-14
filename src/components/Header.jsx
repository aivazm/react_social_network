import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'

const Header = () => {
    return (
    <header className={classes.header}>
        <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'/>
    </header>);
};

export default Header;