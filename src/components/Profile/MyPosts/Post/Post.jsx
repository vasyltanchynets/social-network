import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img
                    src="https://www.fleetmagazine.com/wp-content/uploads/2021/08/auto-fast-furious-1024x768.jpg"
                    alt=""
                />
                {props.message}
                <div>like {props.likesCount}</div>
            </div>
        </div>
    );
};

export default Post;
