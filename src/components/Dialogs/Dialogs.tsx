import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


function Dialogs(props: DialogsPropsType) {

    const contactsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem key={d.id} name={d.name} id={d.id}/>
    })
    const messagesElements = props.dialogsPage.messages.map(m => {
        return <Messages key={m.id} message={m.messages}/>
    })

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextMessage(e)
    }
    const onClickHandler = () => {
        props.onClickSendMessage()
    }

    // if (!props.isAuth) {
    //     return <Redirect to={"/login"}/>
    // }

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
