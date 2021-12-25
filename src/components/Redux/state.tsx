export type PostsType = {
    id: number
    messages: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    messages: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, messages: "Привет!", likesCount: 12},
            {id: 2, messages: "Как дела?", likesCount: 20},
            {id: 3, messages: "How old are you?", likesCount: 25},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Evgen"},
            {id: 2, name: "User2"},
            {id: 3, name: "User3"},
            {id: 4, name: "User4"},
            {id: 5, name: "User5"},
        ],
        messages: [
            {id: 1, messages: "Hi!"},
            {id: 2, messages: "How are you?"},
            {id: 3, messages: "Yo-yo!"},
            {id: 4, messages: "Lets learn React!"},
            {id: 5, messages: "Lets learn TypeScript"},
        ],
    }
}

export default state


// let dialogs: Array<DialogsType> = [
//     {id: 1, name: "Evgen"},
//     {id: 2, name: "User2"},
//     {id: 3, name: "User3"},
//     {id: 4, name: "User4"},
//     {id: 5, name: "User5"},
// ]
// let messages: Array<MessagesType> = [
//     {id: 1, messages: "Hi!"},
//     {id: 2, messages: "How are you?"},
//     {id: 3, messages: "Yo-yo!"},
//     {id: 4, messages: "Lets learn React!"},
//     {id: 5, messages: "Lets learn TypeScript"},
// ]
// let posts: Array<PostsType> = [
//     {id: 1, messages: "Привет!", likesCount: 12},
//     {id: 2, messages: "Как дела?", likesCount: 20},
//     {id: 3, messages: "Gerara here?", likesCount: 25},
//     {id: 4, messages: "Sup?", likesCount: 100},
//     {id: 5, messages: "Jabroni!", likesCount: 69},
// ]