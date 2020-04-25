const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let messageId = 5;


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 20},
                {id: 2, message: 'It is my first post', likesCount: 10},
                {id: 3, message: 'Are you ok?', likesCount: 7},
            ],
            newPostText: 'text'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Lexa',
                    avatar: 'https://www.modnapricha.info/wp-content/uploads/2019/01/kvadratnoje-litso-1-853x1024.jpg'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    avatar: 'https://ath2.unileverservices.com/wp-content/uploads/sites/7/2017/12/brunette-wavy-bob-bang.jpg'
                },
                {
                    id: 3,
                    name: 'Misha',
                    avatar: 'https://style4man.com/wp-content/uploads/2014/08/men-eyeglasses-trends-2014.jpg'
                },
                {id: 4, name: 'Love', avatar: 'https://cs9.pikabu.ru/post_img/2020/01/04/7/1578134346135831614.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'kid'},
                {id: 3, message: 'do you'},
                {id: 4, message: 'like dope?'}
            ],
            newMessageBody: ""
        },
        sideBar: {
            friends: [
                {id: 1, name: 'first', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
                {id: 2, name: 'second', avatar: 'https://klike.net/uploads/posts/2019-03/1551511791_8.jpg'},
                {
                    id: 3,
                    name: 'third',
                    avatar: 'https://st.depositphotos.com/1491329/4426/i/950/depositphotos_44267909-stock-photo-beautiful-woman-with-black-lace.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST && this._state.profilePage.newPostText !== '') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE && this._state.dialogsPage.newMessageBody !== '') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: messageId++, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => (
    {type: ADD_POST}
);
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
);
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body}
);

window.state = store;
export default store;