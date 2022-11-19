import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";
import StoreContext from "../../../redux/store-context";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
