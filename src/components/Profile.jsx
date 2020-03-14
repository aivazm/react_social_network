import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://image.freepik.com/free-photo/wide-asphalt-road-with-buildings-horizon_1127-2192.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    new post
                </div>
            </div>
            <div className='posts'>
                <div className={classes.item}>post1</div>
                <div className={classes.item}>post2</div>
            </div>
        </div>);
};

export default Profile;