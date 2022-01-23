import React, {ChangeEvent} from 'react';
import {changeTextOnMessageAC, sendNewMessageAC} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const updateTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changeTextOnMessageAC(e.currentTarget.value))
                    }
                    const onClickSendMessage = () => {
                        const newMessage = store.getState().dialogsPage.newMessage;
                        store.dispatch(sendNewMessageAC(newMessage))
                    }
                    return (
                        <Dialogs dialogsPage={store.getState().dialogsPage}
                                 updateTextMessage={updateTextMessage}
                                 onClickSendMessage={onClickSendMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
