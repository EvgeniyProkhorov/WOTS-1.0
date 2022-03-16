import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UsersType = {
    id: number
    photos: {
        small: string | undefined,
        large: string | undefined
    },
    name: string
    location: {
        city: string
        country: string
    },
    status: string
    followed: boolean
}
export type InitStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: InitStateType = initState, action: GeneralType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
            // return {...state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload}
        }
        case "CHANGE-ISFETCHING": {
            return {...state, isFetching: action.payload}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(id => id !== action.payload.userID)
            }
        default:
            return state
    }
}

type GeneralType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof changeIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userID
        }
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userID
        }
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: page
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: count
    } as const
}

export const changeIsFetching = (isFetching: boolean) => {
    return {
        type: "CHANGE-ISFETCHING",
        payload: isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        payload: {isFetching, userID}
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(changeIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(changeIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            // console.log(response.data.totalCount)
        })
}

export const followThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    usersAPI.followAxios(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        });
}

export const unfollowThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    usersAPI.unfollowAxios(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        });
}

export default usersReducer;