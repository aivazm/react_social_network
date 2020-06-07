// eslint-disable-next-line no-unused-vars
import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
    WithAuthRedirect
)(Dialogs);