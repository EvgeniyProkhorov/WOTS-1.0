import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsPageType} from "../Redux/store";

type DialogsProps = {
    dialogsPage: DialogsPageType
    updateTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSendMessage: () => void
}

function Dialogs(props: DialogsProps) {

    const contactsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    const messagesElements = props.dialogsPage.messages.map(m => {
        return <Messages message={m.messages}/>
    })

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextMessage(e)
    }
    const onClickHandler = () => {
        props.onClickSendMessage()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={props.dialogsPage.newMessage}
                              onChange={onChangeHandler}> </textarea>
                    <button onClick={onClickHandler}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
