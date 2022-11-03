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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;
