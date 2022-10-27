import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: 98 },
        { id: 2, message: "It's my first post", likesCount: 25 },
    ];

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post
                    message={postsData[0].message}
                    likesCount={postsData[0].likesCount}
                />
                <Post
                    message={postsData[1].message}
                    likesCount={postsData[1].likesCount}
                />
            </div>
        </div>
    );
};

export default MyPosts;
