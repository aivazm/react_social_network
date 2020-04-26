const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
        posts: [
            {id: 1, message: 'Hi', likesCount: 20},
            {id: 2, message: 'It is my first post', likesCount: 10},
            {id: 3, message: 'Are you ok?', likesCount: 7},
        ],
        newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPostText = state.newPostText;
            if (newPostText !== '') {
                let postId = state.posts.length;
                let newPost = {
                    id: ++postId,
                    message: newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
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