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
}

const initState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false
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
        default:
            return state
    }
}

type GeneralType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof changeIsFetching>

export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userID
        }
    } as const
}
export const unfollow = (userID: number) => {
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

export default usersReducer;