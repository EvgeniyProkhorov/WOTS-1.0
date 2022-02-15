import css from "./users.module.css";
import userImg from "../../assets/images/User-Profile-PNG-Image.png";
import React from "react";
import {UsersType} from "../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type UserFProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onClickPageChanged: (page: number) => void
}

export const Users = (props: UserFProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let arrWithPages = []
    for (let i = 1; i <= pagesCount; i++) {
        arrWithPages.push(i)
    }

    return (
        <div>
            <div>
                {arrWithPages.map((p, i) => {
                    return <span key={`${p}_${i}`} onClick={() => props.onClickPageChanged(p)}
                                 className={props.currentPage === p ? css.selectedPage : ''}>{p}</span>

                })}
                {/*<span className={css.selectedPage}>1</span>*/}
                {/*<span>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
                {/*<span>5</span>*/}
            </div>
            {props.users.map(u => {
                return <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={css.userPhoto} src={u.photos.small ? u.photos.small : userImg} alt={'pic'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
