import React from 'react';
import classes from './ProfileInfo.module.css'
import mainImg from '../../../main.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className={ classes.image}>
                <img src={mainImg} alt="mainImg" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;