import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let dialogsPage = store.getState().dialogsPage;
                let sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                };
                let newMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
                return (
                    <Dialogs updateNewMessage={newMessageChange}
                             sendMessage={sendMessage}
                             dialogsPage={dialogsPage}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;