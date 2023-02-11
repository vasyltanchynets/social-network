import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS";

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return { ...state, usersData: action.usersData };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id != action.userId
                      ),
            };
        default:
            return state;
    }
};

// ACTION CREATORS
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId,
});

// THUNK CREATORS
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    };
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId)); // disabled button

        usersAPI.follow(userId).then((response) => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId)); // no disabled button
        });
    };
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));

        usersAPI.unfollow(userId).then((response) => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        });
    };
};

export default usersReducer;
