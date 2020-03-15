import React from 'react';
import './Post.module.css';
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://beverli.ru/uploads/hairstyles/image-7053.jpg'/>
            post1
            <div><span>Like</span></div>
        </div>
    );
};

export default Post;