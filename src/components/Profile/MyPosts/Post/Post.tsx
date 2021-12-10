import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likes: number
}

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/1674/1674291.png' alt="avatar"/>
            <span> {props.message} </span>
            <div>
                <span>{props.likes} Likes </span>
            </div>
        </div>
    )
}

export default Post;


