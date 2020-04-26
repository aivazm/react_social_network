import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostCreator());
                };
                let postChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text));
                };
                return (
                    <MyPosts updateNewPostText={postChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;