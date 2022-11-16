import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );

        this._callSubscriber(this._state);
    },
};

export default store;
