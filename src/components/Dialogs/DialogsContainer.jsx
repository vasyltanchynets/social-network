import Dialogs from "./Dialogs";
import {
    sendMessageActionCreator,
    updateNewMessagBodyActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
