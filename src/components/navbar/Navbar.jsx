import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom"
import FriendsBar from "./friendsBar/FriendsBar";

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.activeLink}>News</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;