import React from "react";
import Dialogs from "./Dialogs";
import {
    sendMessageActionCreator,
    updateNewMessagBodyActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../redux/store-context";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessagBodyActionCreator(body));
                };

                return (
                    <Dialogs
                        updateNewMessagBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
