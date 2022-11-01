import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePageState.postsData}
                newPostText={props.profilePageState.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;
