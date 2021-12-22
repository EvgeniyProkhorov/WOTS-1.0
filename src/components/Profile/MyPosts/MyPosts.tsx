import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    let messagesData = [
        {id: 1, messages: "Привет!", likesCount: 12},
        {id: 2, messages: "Как дела?", likesCount: 20},
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.button}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {messagesData.map(p => {
                    return <Post message={p.messages} likes={p.likesCount}/>
                })}
            </div>
        </div>
    )
}

export default MyPosts;


