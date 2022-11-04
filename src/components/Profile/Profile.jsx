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
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
