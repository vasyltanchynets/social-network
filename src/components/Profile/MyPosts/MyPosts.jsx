import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
