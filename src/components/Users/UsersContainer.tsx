import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeIsFetching,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.changeIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                // console.log(response.data.totalCount)
            })
    }

    onClickPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.changeIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.changeIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
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

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    changeIsFetching,
    toggleFollowingProgress

})(UsersAPIComponent)

export default UsersContainer;