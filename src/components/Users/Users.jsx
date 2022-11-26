import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://pbs.twimg.com/profile_images/1478358634992181248/z18Bm6U0_400x400.jpg",
                followed: true,
                fullName: "Jason Statham",
                status: "actor",
                location: { country: "USA", city: "Los Angeles" },
            },
            {
                id: 2,
                photoUrl:
                    "https://www.biography.com/.image/t_share/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg",
                followed: false,
                fullName: "Dwayne Johnson",
                status: "actor",
                location: { country: "USA", city: "Los Angeles" },
            },
            {
                id: 3,
                photoUrl:
                    "https://lastfm.freetls.fastly.net/i/u/770x0/d8eb971d0a1d12e05467f76356cddb37.jpg",
                followed: false,
                fullName: "Vin Diesel",
                status: "actor",
                location: { country: "USA", city: "Los Angeles" },
            },
        ]);
    }

    return (
        <div>
            {props.usersData.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img
                                src={user.photoUrl}
                                className={styles.userPhoto}
                                alt=""
                            />
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(user.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(user.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
