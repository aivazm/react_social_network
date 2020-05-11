import React from 'react';
import './FriendsBar.module.css';
import classes from './FriendsBar.module.css';
import Friend from "./friend/Friend";

const FriendsBar = (props) => {
    let friends = props.friends.map(f => <Friend id={f.id} name={f.name} avatar={f.avatar}/>);
    return (
        <div className={classes.friends}>
            {friends}
        </div>
    )
};

export default FriendsBar;