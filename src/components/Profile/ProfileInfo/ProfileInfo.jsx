import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.image}>
                <img
                    src="https://a.cdn-hotels.com/gdcs/production182/d660/7fe239d2-a8ae-4bc2-80c5-ab80064977b9.jpg"
                    alt=""
                />
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.small} alt="" />
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
