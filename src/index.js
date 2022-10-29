import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 98 },
    { id: 2, message: "It's my first post", likesCount: 25 },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App
            postsData={postsData}
            dialogsData={dialogsData}
            messagesData={messagesData}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
