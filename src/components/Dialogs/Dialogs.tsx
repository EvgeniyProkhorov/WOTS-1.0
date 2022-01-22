import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {ActionsType, DialogsPageType} from "../Redux/store";
import {changeTextOnMessageAC, sendNewMessageAC} from "../Redux/dialogsReducer";
// import {AppDispatch} from "../Redux/redux-store";

type DialogsProps = {
    state: DialogsPageType
    // addMessage: (message: string) => void
    // onChangeMessageCallBack: (text: string) => void
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsProps) {

    const contactsElements = props.state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    const messagesElements = props.state.messages.map(m => {
        return <Messages message={m.messages}/>
    })

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // AppDispatch(changeTextOnMessageAC(e.currentTarget.value))
        props.dispatch(changeTextOnMessageAC(e.currentTarget.value))
        // props.onChangeMessageCallBack(e.currentTarget.value)
    }
    const onClickHandler = () => {
        // AppDispatch(sendNewMessageAC(props.state.newMessage))
        props.dispatch(sendNewMessageAC(props.state.newMessage))
        // props.addMessage(props.state.newMessage)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {contactsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={props.state.newMessage}
                              onChange={onChangeHandler}> </textarea>
                    <button onClick={onClickHandler}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
