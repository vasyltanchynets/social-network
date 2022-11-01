let rerenderEntireTree = () => {
    console.log("State changed");
};

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
