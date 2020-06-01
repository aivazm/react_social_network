import {profileAPI, userAPI as usersAPI} from "../../api/api";
import {followSuccess, toggleFollowingProgress} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It is my first post', likesCount: 10}
    ],
    newPostText: 'new text',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_POST:
            let postId = state.posts.length;
            let newPost = {
                id: ++postId,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPost = () => (
    {type: ADD_POST}
);
export const updateNewPostText = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);

export const getProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 2
        }
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};

export default profileReducer;