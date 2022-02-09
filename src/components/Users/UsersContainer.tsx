import React from "react";
import {connect} from "react-redux";
import Users from "./UsersC";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../Redux/usersReducer";

type MapStateProps = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
type MapDispatchProps = {
    followOnClick: (userID: number) => void
    unfollowOnClick: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}
export type UsersPropsType = MapStateProps & MapDispatchProps


const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;