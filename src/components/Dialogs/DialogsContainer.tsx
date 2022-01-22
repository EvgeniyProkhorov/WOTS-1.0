import React, {ChangeEvent} from 'react';
import {changeTextOnMessageAC, sendNewMessageAC} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../Redux/redux-store";

type DialogsContainerProps = {
    store: ReduxStoreType
}

function DialogsContainer(props: DialogsContainerProps) {

    const state = props.store.getState()

    const updateTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeTextOnMessageAC(e.currentTarget.value))
    }
    const onClickSendMessage = () => {
        props.store.dispatch(sendNewMessageAC(state.dialogsPage.newMessage))
    }


    return (
        <Dialogs state={state.dialogsPage}
                 updateTextMessage={updateTextMessage}
                 onClickSendMessage={onClickSendMessage}/>
    )
}

export default DialogsContainer;
