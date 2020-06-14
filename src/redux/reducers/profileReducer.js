import {profileAPI, userAPI as usersAPI} from "../../api/api";
import {followSuccess, toggleFollowingProgress} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';


const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It is my first post', likesCount: 10}
    ],
    newPostText: 'new text',
    profile: null,
    status: ""
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
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
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
export const setProfileStatus = (status) => (
    {type: SET_PROFILE_STATUS, status}
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

// thunk получения статуса пользователя
export const getProfileStatus = (userId) => (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data));
            });
};

// thunk обновления статуса пользователя
export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        });
};

export default profileReducer;