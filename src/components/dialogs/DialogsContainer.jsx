import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let newMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    };

    return (
        <Dialogs updateNewMessage={newMessageChange}
                 sendMessage={sendMessage}
                 dialogsPage={dialogsPage}
        />
    );
};

export default DialogsContainer;