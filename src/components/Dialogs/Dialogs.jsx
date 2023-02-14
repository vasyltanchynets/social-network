import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    ));

    let messagesElements = state.messagesData.map((mes) => (
        <Message message={mes.message} key={mes.id} />
    ));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessagBody(body);
    };

    if (!props.isAuth) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            cols="30"
                            rows="5"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
