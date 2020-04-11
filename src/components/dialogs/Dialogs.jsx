import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={"Lexa"} id={"1"}/>
                <DialogItem name={"Nikita"} id={"2"}/>
                <DialogItem name={"Misha"} id={"3"}/>
                <DialogItem name={"Anton"} id={"4"}/>
            </div>
            <div className={classes.messages}>
                <Message message={"Hi"}/>
                <Message message={"chuvak"}/>
                <Message message={"Yo"}/>
            </div>

        </div>
    );
};

export default Dialogs;