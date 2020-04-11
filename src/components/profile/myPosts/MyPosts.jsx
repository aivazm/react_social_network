import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder={'Some message'}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, ebba' likeCount={'1'}/>
                <Post message={'It is my first post'} likesCount={'2'}/>
            </div>
        </div>
    );
};

export default MyPosts;