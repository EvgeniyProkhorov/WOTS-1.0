const initState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
}

export type AuthInitStateProps = typeof initState
type ActionType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: AuthInitStateProps = initState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userID: string, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userID, email, login}
    } as const
}