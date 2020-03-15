import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            My posts
            <div>
                <textarea placeholder={'Some message'}/>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, ebba'} likeCount={'1'}/>
                <Post message={'It is my first post'} likeCount={'2'}/>
            </div>
        </div>
    );
};

export default MyPosts;