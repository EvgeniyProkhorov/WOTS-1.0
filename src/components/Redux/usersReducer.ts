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
}

const initState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
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
        default:
            return state
    }
}

type GeneralType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userID
        }
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: page
    } as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: count
    } as const
}

export default usersReducer;