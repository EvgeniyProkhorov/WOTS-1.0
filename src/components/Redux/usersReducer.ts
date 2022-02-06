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
}

const initState: InitStateType = {
    users: [
        // {
        //     id: 1,
        //     avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //     fullName: 'Evgen P.',
        //     location: {
        //         city: 'SPB',
        //         country: 'Russia'
        //     },
        //     status: 'lorum ipsum',
        //     followed: true
        // },
        // {
        //     id: 2,
        //     avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //     fullName: 'Sasha I.',
        //     location: {
        //         city: 'Moscow',
        //         country: 'Russia'
        //     },
        //     status: 'ipsum lorum',
        //     followed: false
        //
        // },
        // {
        //     id: 3,
        //     avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //     fullName: 'Anna K.',
        //     location: {
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     },
        //     status: 'LOL',
        //     followed: true
        //
        // },
        // {
        //     id: 4,
        //     avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //     fullName: 'Andrew Y.',
        //     location: {
        //         city: 'New-York',
        //         country: 'USA'
        //     },
        //     status: 'ROFL',
        //     followed: false
        //
        // },
    ]
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
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
}

type GeneralType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

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

export default usersReducer;