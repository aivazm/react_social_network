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
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case ADD_POST:
            let newPostText = stateCopy.newPostText;
            if (newPostText !== '') {
                stateCopy.posts = [...state.posts];
                let postId = stateCopy.posts.length;
                let newPost = {
                    id: ++postId,
                    message: newPostText,
                    likesCount: 0
                };
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const addPostCreator = () => (
    {type: ADD_POST}
);
export const updateNewPostTextCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);

export default profileReducer;