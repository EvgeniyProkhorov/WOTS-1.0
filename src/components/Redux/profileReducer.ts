import {ActionsType} from "./store";

export type PostsType = {
    id: number
    messages: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let initState = {
    posts: [
        {id: 1, messages: "Привет!", likesCount: 12},
        {id: 2, messages: "Как дела?", likesCount: 20},
        {id: 3, messages: "How old are you?", likesCount: 25},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: Date.now(), messages: state.newPostText, likesCount: 12}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case "CHANGE-NEW-TEXT": {
            return {...state, newPostText: action.payload.message}
        }
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

export default profileReducer;
