import {ActionsType, PostsType, ProfilePageType} from "./store";

let initState = {
    posts: [
        {id: 1, messages: "Привет!", likesCount: 12},
        {id: 2, messages: "Как дела?", likesCount: 20},
        {id: 3, messages: "How old are you?", likesCount: 25},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initState, action: ActionsType) => {
    switch(action.type){
        case "ADD-POST":
            let newPost: PostsType = {id: Date.now(), messages: action.payload.postMessage, likesCount: 12}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.payload.message
            return state
        default:
            return state
    }
}


export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        payload: {
            postMessage
        }
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
