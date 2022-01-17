export type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    changeNewTextCallBack: (message: string) => void
    addMessage: (message: string) => void
    onChangeMessageCallBack: (text: string) => void
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (_state: RootStateType) => void) => void
    getState: () => RootStateType
}

export let store: StoreType = {
    _state: {
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
    },
    addPost(postMessage: string) {
        let newPost = {id: Date.now(), messages: postMessage, likesCount: 12}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    changeNewTextCallBack(message: string) {
        this._state.profilePage.newPostText = message
        this._callSubscriber(this.getState())
    },
    addMessage(message: string) {
        const newMessage = {id: Date.now(), messages: message}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessage = ""
        this._callSubscriber(this.getState())
    },
    onChangeMessageCallBack(text: string) {
        this._state.dialogsPage.newMessage = text
        this._callSubscriber(this.getState())
    },
    _callSubscriber(_state) {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
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


