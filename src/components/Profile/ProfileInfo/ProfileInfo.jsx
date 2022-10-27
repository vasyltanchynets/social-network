import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.image}>
                <img
                    src="https://a.cdn-hotels.com/gdcs/production182/d660/7fe239d2-a8ae-4bc2-80c5-ab80064977b9.jpg"
                    alt=""
                />
            </div>
            <div className={styles.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
