import Dialogs from "./Dialogs";
import {
    sendMessageActionCreator,
    updateNewMessagBodyActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessagBody: (body) => {
            dispatch(updateNewMessagBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
