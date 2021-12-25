import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../Redux/state";

export type MyPostsProps = {
    state: Array<PostsType>
}

function MyPosts(props: MyPostsProps) {

    let postsElement = props.state.map(m => {
        return <Post message={m.messages} likes={m.likesCount}/>
    })
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
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


