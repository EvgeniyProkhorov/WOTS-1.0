import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let dialogs: Array<DialogsType> = [
    {id: 1, name: "Evgen"},
    {id: 2, name: "User2"},
    {id: 3, name: "User3"},
    {id: 4, name: "User4"},
    {id: 5, name: "User5"},
]
let messages: Array<MessagesType> = [
    {id: 1, messages: "Hi!"},
    {id: 2, messages: "How are you?"},
    {id: 3, messages: "Yo-yo!"},
    {id: 4, messages: "Lets learn React!"},
    {id: 5, messages: "Lets learn TypeScript"},
]
let posts: Array<PostsType> = [
    {id: 1, messages: "Привет!", likesCount: 12},
    {id: 2, messages: "Как дела?", likesCount: 20},
    {id: 3, messages: "Gerara here?", likesCount: 25},
    {id: 4, messages: "Sup?", likesCount: 100},
    {id: 5, messages: "Jabroni!", likesCount: 69},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialog={dialogs} message={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
