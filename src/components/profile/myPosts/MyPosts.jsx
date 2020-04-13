import React from 'react';
import './MyPosts.module.css';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It is my first post', likesCount: 10},
        {id: 3, message: 'Are you ok?', likesCount: 7},
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;