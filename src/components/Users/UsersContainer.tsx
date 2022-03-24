import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeIsFetching, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, unfollowThunkCreator,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onClickPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let arrWithPages = []
        for (let i = 1; i <= pagesCount; i++) {
            arrWithPages.push(i)
        }

        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         followThunkCreator={this.props.followThunkCreator}
                         unfollowThunkCreator={this.props.unfollowThunkCreator}
                         onClickPageChanged={this.onClickPageChanged}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}
                         followingInProgress={this.props.followingInProgress}/>}
        </>
    }
}

type MapStateProps = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}
type MapDispatchProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    changeIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userID: number) => void
    unfollowThunkCreator: (userID: number) => void

}

export type UsersPropsType = MapStateProps & MapDispatchProps


const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
//     return {
//         followOnClick: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollowOnClick: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (count: number) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         changeIsFetching: (isFetching: boolean) => {
//             dispatch(changeIsFetchingAC(isFetching))
//         }
//     }
// }

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        followThunkCreator,
        unfollowThunkCreator,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        changeIsFetching,
        toggleFollowingProgress,
        getUsersThunkCreator
    }),
    withAuthRedirect
)(UsersAPIComponent)

// const UsersContainer = connect(mapStateToProps, {
//     followThunkCreator,
//     unfollowThunkCreator,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     changeIsFetching,
//     toggleFollowingProgress,
//     getUsersThunkCreator
//
// })(UsersAPIComponent)
//
// export default UsersContainer;