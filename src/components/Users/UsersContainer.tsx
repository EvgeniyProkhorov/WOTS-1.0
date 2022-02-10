import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {
    changeIsFetching,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersType
} from "../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)
            })
    }

    onClickPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
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
            :<Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onClickPageChanged={this.onClickPageChanged}/>}
        </>
    }
}

type MapStateProps = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
type MapDispatchProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    changeIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateProps & MapDispatchProps


const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    changeIsFetching

})(UsersAPIComponent)

export default UsersContainer;