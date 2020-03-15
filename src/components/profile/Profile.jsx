import React from 'react';
import './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://image.freepik.com/free-photo/wide-asphalt-road-with-buildings-horizon_1127-2192.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;