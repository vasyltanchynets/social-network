import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "95e4e714-045c-4591-aa12-fdb9a4576d8a",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`);
    },
};

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    },
};
