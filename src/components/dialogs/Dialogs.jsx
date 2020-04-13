import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Anton'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'kid'},
        {id: 3, message: 'do you'},
        {id: 4, message: 'like dope?'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    );
};

export default Dialogs;