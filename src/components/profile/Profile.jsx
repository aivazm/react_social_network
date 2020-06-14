import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;