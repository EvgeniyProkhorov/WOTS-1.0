import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {addMessage, DialogsPageType, onChangeMessageCallBack} from "../Redux/state";

type DialogsProps = {
    state: DialogsPageType
    addMessage: (message: string) => void
    onChangeMessageCallBack: (text: string) => void
}

function Dialogs(props: DialogsProps) {

    const contactsElements = props.state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    const messagesElements = props.state.messages.map(m => {
        return <Messages message={m.messages}/>
    })

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        props.onChangeMessageCallBack(e.currentTarget.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.state.newMessage} onChange={onChangeHandler}> </textarea>
                <button onClick={()=> props.addMessage(props.state.newMessage)}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;
