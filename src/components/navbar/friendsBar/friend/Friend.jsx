import React from 'react';
import './../FriendsBar.module.css';
import classes from './../FriendsBar.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friends}>
            <img src={props.avatar}/>
            <div>{props.name}</div>
        </div>
    )
};

export default Friend;