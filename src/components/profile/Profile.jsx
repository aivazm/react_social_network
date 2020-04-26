import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;