let rerenderEntireTree: (state: RootStateType) => void = () => {
    console.log('State was changed')
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer
}

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
export type FriendsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export const addPost = (postMessage: string) => {
    let newPost = {id: Date.now(), messages: postMessage, likesCount: 12}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const changeNewTextCallBack = (message: string) => {
    state.profilePage.newPostText = message
    rerenderEntireTree(state)
}

export const addMessage = (message: string) => {
    const newMessage = {id: Date.now(), messages: message}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessage = ""
    rerenderEntireTree(state)
}

export const onChangeMessageCallBack = (text: string) => {
    state.dialogsPage.newMessage = text
    rerenderEntireTree(state)
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, messages: "Привет!", likesCount: 12},
            {id: 2, messages: "Как дела?", likesCount: 20},
            {id: 3, messages: "How old are you?", likesCount: 25},
        ],
        newPostText: ""
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
        newMessage: ""
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Evgen'},
            {id: 3, name: 'Kolyan'},
        ]
    }
}

export default state


