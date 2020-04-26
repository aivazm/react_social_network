const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            if (body !== '') {
                state.newMessageBody = '';
                let messageId = state.messages.length;
                state.messages.push({id: messageId++, message: body});
            }
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
);
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body}
);
export default dialogsReducer;