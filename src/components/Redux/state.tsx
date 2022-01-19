export type StoreType = {
    _state: RootStateType
    // addPost: (postMessage: string) => void
    // changeNewTextCallBack: (message: string) => void
    // addMessage: (message: string) => void
    // onChangeMessageCallBack: (text: string) => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    addPostACType
    | changeNewTextOnPostACType
    | addNewMessageACType
    | changeTextOnMessageACType

type addPostACType = ReturnType<typeof addPostAC>
type changeNewTextOnPostACType = ReturnType<typeof changeNewTextOnPostAC>
type addNewMessageACType = ReturnType<typeof addNewMessageAC>
type changeTextOnMessageACType = ReturnType<typeof changeTextOnMessageAC>



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
export const addNewMessageAC = (message: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        payload: {
            message
        }
    } as const
}
export const changeTextOnMessageAC = (text: string) => {
    return {
        type: 'CHANGE-TEXT-ON-MESSAGES',
        payload: {
            text
        }
    } as const
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
    // addPost(postMessage: string) {
    //     let newPost = {id: Date.now(), messages: postMessage, likesCount: 12}
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // changeNewTextCallBack(message: string) {
    //     this._state.profilePage.newPostText = message
    //     this._callSubscriber()
    // },
    // addMessage(message: string) {
    //     const newMessage = {id: Date.now(), messages: message}
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessage = ""
    //     this._callSubscriber()
    // },
    // onChangeMessageCallBack(text: string) {
    //     this._state.dialogsPage.newMessage = text
    //     this._callSubscriber()
    // },
    _callSubscriber() {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {id: Date.now(), messages: action.payload.postMessage, likesCount: 12}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.payload.message
            this._callSubscriber()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            const newMessage = {id: Date.now(), messages: action.payload.message}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessage = ""
            this._callSubscriber()
        } else if (action.type === 'CHANGE-TEXT-ON-MESSAGES') {
            this._state.dialogsPage.newMessage = action.payload.text
            this._callSubscriber()
        }
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


