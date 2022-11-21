import React from "react";
import Dialogs from "./Dialogs";
import {
    sendMessageActionCreator,
    updateNewMessagBodyActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessagBody: () => {
            dispatch(sendMessageActionCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessagBodyActionCreator(body));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
