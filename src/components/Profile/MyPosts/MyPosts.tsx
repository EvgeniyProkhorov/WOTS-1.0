import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
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
                <Post message="Привет!" likes={15}/>
                <Post message="Как дела?" likes={20}/>
            </div>
        </div>
    )
}

export default MyPosts;


