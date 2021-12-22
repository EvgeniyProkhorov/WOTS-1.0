import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileProps} from "../Profile";



function MyPosts(props: ProfileProps) {

    let postsElement = props.posts.map(m => {
        return <Post message={m.messages} likes={m.likesCount}/>
    })
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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;


