const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'It is my first post', likesCount: 10}
    ],
    newPostText: 'new text'
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
        default:
            return state;
    }
};

export const addPostCreator = () => (
    {type: ADD_POST}
);
export const updateNewPostTextCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);

export default profileReducer;