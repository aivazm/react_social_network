import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    let postChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts updateNewPostText={postChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;