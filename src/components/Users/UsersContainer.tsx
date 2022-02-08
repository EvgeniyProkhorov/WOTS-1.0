import React from "react";
import {connect} from "react-redux";
import Users from "./UsersC";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../Redux/usersReducer";

type MapStateProps = {
    users: Array<UsersType>
}
type MapDispatchProps = {
    followOnClick: (userID: number) => void
    unfollowOnClick: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export type UsersPropsType = MapStateProps & MapDispatchProps


const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        followOnClick: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollowOnClick: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;