import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;