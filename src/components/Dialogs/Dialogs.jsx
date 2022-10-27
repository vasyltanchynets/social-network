import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + " " + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Sofia" },
        { id: 2, name: "Solomia" },
        { id: 3, name: "Marta" },
        { id: 4, name: "Ksenia" },
    ];

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hey" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Welcome" },
    ];

    let dialogsElements = dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ));

    let messagesElements = messagesData.map((mes) => (
        <Message message={mes.message} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;
