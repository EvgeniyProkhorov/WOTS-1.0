import React from "react";
import css from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userImg from '../../assets/images/User-Profile-PNG-Image.png'


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(response.data.totalCount)
            })
    }

    onClickPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let arrWithPages = []
        for (let i = 1; i <= pagesCount; i++) {
            arrWithPages.push(i)
        }

        return (
            <div>
                <div>
                    {arrWithPages.map(p => {
                        return <span onClick={() => this.onClickPageChanged(p)}
                                     className={this.props.currentPage === p ? css.selectedPage : ''}>{p}</span>

                    })}
                    {/*<span className={css.selectedPage}>1</span>*/}
                    {/*<span>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.users.map(u => {
                    return <div key={u.id}>
                <span>
                    <div>
                        <img className={css.userPhoto} src={u.photos.small ? u.photos.small : userImg} alt={'pic'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollowOnClick(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.followOnClick(u.id)}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                    </div>
                })}
            </div>
        )
    }
}

export default Users;