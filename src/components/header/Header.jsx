import React from 'react';
import './Header.module.css';
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt={'some alt'}/>
                <div className={styles.loginBlock}>
                    {props.isAuth ? props.login
                        : <NavLink to={'/login'}> Login </NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;