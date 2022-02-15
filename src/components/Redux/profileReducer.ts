

export type PostsType = {
    id: number
    messages: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: boolean,
        github: string,
        mainLink: boolean
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | undefined
}

type ProfileActionsType = ReturnType<typeof addPostAC>
| ReturnType<typeof changeNewTextOnPostAC>
| ReturnType<typeof setUserProfile>

let initState:ProfilePageType = {
    posts: [
        {id: 1, messages: "Привет!", likesCount: 12},
        {id: 2, messages: "Как дела?", likesCount: 20},
        {id: 3, messages: "How old are you?", likesCount: 25},
    ],
    newPostText: "",
    profile: undefined
}

const profileReducer = (state: ProfilePageType = initState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: Date.now(), messages: state.newPostText, likesCount: 12}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.payload.message}
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}


export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changeNewTextOnPostAC = (message: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        payload: {
            message
        }
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export default profileReducer;
