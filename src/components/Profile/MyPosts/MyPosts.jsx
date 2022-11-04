import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: "ADD-POST" });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
