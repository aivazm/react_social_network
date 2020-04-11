import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://image.freepik.com/free-photo/wide-asphalt-road-with-buildings-horizon_1127-2192.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;