import {ActionsType, DialogsType, MessagesType} from "./store";

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}

let dialogInit = {
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
}

const dialogsReducer = (state: DialogsPageType = dialogInit, action: ActionsType) => {
    switch(action.type){
        case "SEND-NEW-MESSAGE": {
            const stateCopy = {...state}
            const newMessage = {id: Date.now(), messages: stateCopy.newMessage}
            stateCopy.messages.push(newMessage)
            stateCopy.newMessage = ""
            return stateCopy
        }
        case "CHANGE-TEXT-ON-MESSAGES": {
            const stateCopy = {...state}
            stateCopy.newMessage = action.payload.text
            return stateCopy
        }
        default:
            return state
    }
}

export const sendNewMessageAC = () => {
    return {
        type: 'SEND-NEW-MESSAGE',
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

export default dialogsReducer;
