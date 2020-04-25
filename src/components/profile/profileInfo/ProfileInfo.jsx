import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                    <img src='https://i.pinimg.com/600x315/68/38/b5/6838b5737c941d049e9f317116caa1dd.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;