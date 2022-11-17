const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    dialogsData: [
        { id: 1, name: "Sofia" },
        { id: 2, name: "Solomia" },
        { id: 3, name: "Marta" },
        { id: 4, name: "Ksenia" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hey" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Welcome" },
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({
                id: 5,
                message: body,
            });
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessagBodyActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
});

export default dialogsReducer;
