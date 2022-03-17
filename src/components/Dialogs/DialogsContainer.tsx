import React, {ChangeEvent} from 'react';
import {changeTextOnMessageAC, DialogsPageType, sendNewMessageAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    onClickSendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeTextOnMessageAC(e.currentTarget.value))
        },
        onClickSendMessage: () => {
            // const newMessage = store.getState().dialogsPage.newMessage;
            dispatch(sendNewMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer


// function DialogsContainer() {
//     return (
//         <StoreContextNotForProj.Consumer>
//             {
//                 (store) => {
//                     const updateTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(changeTextOnMessageAC(e.currentTarget.value))
//                     }
//                     const onClickSendMessage = () => {
//                         store.dispatch(sendNewMessageAC())
//                     }
//                     return (
//                         <Dialogs dialogsPage={store.getState().dialogsPage}
//                                  updateTextMessage={updateTextMessage}
//                                  onClickSendMessage={onClickSendMessage}/>
//                     )
//                 }
//             }
//         </StoreContextNotForProj.Consumer>
//     )
// }

