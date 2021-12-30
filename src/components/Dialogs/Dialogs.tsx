import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsPageType} from "../Redux/state";

type DialogsProps = {
    state: DialogsPageType
}

function Dialogs(props: DialogsProps) {

    let contactsElements = props.state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = props.state.messages.map(m => {
        return <Messages message={m.messages}/>
    })

    let newMessage = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessage}> </textarea>
                <button onClick={() => alert(newMessage.current?.value)}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;
