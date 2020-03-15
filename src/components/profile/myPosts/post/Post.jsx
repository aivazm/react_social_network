import React from 'react';
import './Post.module.css';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://beverli.ru/uploads/hairstyles/image-7053.jpg'/>
            {props.message}
            <div><span>Like </span>{props.likeCount}</div>
        </div>
    );
};

export default Post;