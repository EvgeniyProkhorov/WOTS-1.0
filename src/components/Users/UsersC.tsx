import React from "react";
import css from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userImg from '../../assets/images/User-Profile-PNG-Image.png'


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div>
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