const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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