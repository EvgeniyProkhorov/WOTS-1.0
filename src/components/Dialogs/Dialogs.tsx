import React from 'react';
import s from './Dialogs.module.css'
import {Contacts} from "./Contacts/Contacts";
import {Messages} from "./Messages/Messages";

function Dialogs() {
    let contactsData = [
        {id: 1, name: "Evgen"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
        {id: 5, name: "User5"},
    ]
    let messagesData = [
        {id: 1, messages: "Hi!"},
        {id: 2, messages: "How are you?"},
        {id: 3, messages: "Yo-yo!"},
        {id: 4, messages: "Lets learn React!"},
        {id: 5, messages: "Lets learn TypeScript"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsData.map(t => {
                    return <Contacts name={t.name} id={t.id}/>
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => {
                    return <Messages message={m.messages}/>
                })}
            </div>
        </div>
    )
}

export default Dialogs;
