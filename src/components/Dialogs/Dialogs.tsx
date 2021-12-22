import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsType, MessagesType} from "../../index";

type DialogsProps = {
    message: Array<MessagesType>
    dialog: Array<DialogsType>
}

function Dialogs(props: DialogsProps) {

    let contactsElements = props.dialog.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = props.message.map(m => {
        return <Messages message={m.messages}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
