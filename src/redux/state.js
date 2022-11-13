const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you?", likesCount: 98 },
                { id: 2, message: "It's my first post", likesCount: 25 },
            ],
            newPostText: "Network",
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messagesData.push({
                id: 5,
                message: body,
            });
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessagBodyActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
});

export default store;
