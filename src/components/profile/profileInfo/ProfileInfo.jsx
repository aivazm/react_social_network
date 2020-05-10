import React from 'react';
import classes from './ProfileInfo.module.css'
import mainImg from '../../../main.jpg'
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (
            <div>
                <div className={ classes.image}>
                    <img src={mainImg} alt="mainImg" />
                </div>
                <div className={classes.descriptionBlock}>
                    <Preloader/>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={ classes.image}>
                <img src={mainImg} alt="mainImg" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;