import React from "react";
import css from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userImg from '../../assets/images/User-Profile-PNG-Image.png'


const Users = ({users, setUsers, followOnClick, unfollowOnClick}: UsersPropsType) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
        // setUsers([
        //     {
        //         id: 1,
        //         avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //         fullName: 'Evgen P.',
        //         location: {
        //             city: 'SPB',
        //             country: 'Russia'
        //         },
        //         status: 'lorum ipsum',
        //         followed: true
        //     },
        //     {
        //         id: 2,
        //         avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //         fullName: 'Sasha I.',
        //         location: {
        //             city: 'Moscow',
        //             country: 'Russia'
        //         },
        //         status: 'ipsum lorum',
        //         followed: false
        //
        //     },
        //     {
        //         id: 3,
        //         avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //         fullName: 'Anna K.',
        //         location: {
        //             city: 'Kiev',
        //             country: 'Ukraine'
        //         },
        //         status: 'LOL',
        //         followed: true
        //
        //     },
        //     {
        //         id: 4,
        //         avatar: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier',
        //         fullName: 'Andrew Y.',
        //         location: {
        //             city: 'New-York',
        //             country: 'USA'
        //         },
        //         status: 'ROFL',
        //         followed: false
        //
        //     },
        // ])
    }

    return (
        <div>
            {users.map(u => {
                return <div key={u.id}>
                <span>
                    <div>
                        <img className={css.userPhoto} src={u.photos.small ? u.photos.small : userImg} alt={'pic'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollowOnClick(u.id)}>Unfollow</button>
                            : <button onClick={() => followOnClick(u.id)}>Follow</button>}
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

export default Users;