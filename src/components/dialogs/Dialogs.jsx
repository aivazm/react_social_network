import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea value={newMessageBody}
                                      onChange={onNewMessageChange}
                                      placeholder={'Enter your message'}/>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;