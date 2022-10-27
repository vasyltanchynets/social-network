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

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;
