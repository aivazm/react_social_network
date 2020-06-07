import React from 'react';
import classes from './ProfileInfo.module.css'
import mainImg from '../../../assets/images/main.jpg'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

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
    let userName = props.profile.fullName;
    let contactFacebook = props.profile.contacts.facebook;
    return (
        <div>
            <div className={ classes.image}>
                <img src={mainImg} alt="mainImg" />
            </div>
            <div className={classes.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                <ProfileStatus status={"Мой статус"}/>
                <div>{userName}</div>
                <div>My Facebook: {contactFacebook}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;