import React, {ChangeEvent} from 'react';
import {changeTextOnMessageAC, DialogsPageType, sendNewMessageAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    // isAuth: boolean
}

type MapDispatchPropsType = {
    updateTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    onClickSendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateTextMessage: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeTextOnMessageAC(e.currentTarget.value))
        },
        onClickSendMessage: () => {
            dispatch(sendNewMessageAC())
        }
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

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

