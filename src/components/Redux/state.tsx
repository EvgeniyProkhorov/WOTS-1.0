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
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
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


