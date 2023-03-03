import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.small} alt="" />
                <ProfileStatus status={"Hello my friends"} />
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
