// eslint-disable-next-line no-unused-vars
import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);

export default DialogsContainer;