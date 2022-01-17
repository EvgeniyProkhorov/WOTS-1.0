import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../Redux/state";

export type MyPostsProps = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewTextCallBack: (message: string) => void
}

function MyPosts(props: MyPostsProps) {

    const postsElement = props.state.posts.map(m => {
        return <Post message={m.messages} likes={m.likesCount}/>
    })
    const addPost = () => {
        props.addPost(props.state.newPostText)
        // props.addPost(newPostElement.current ? newPostElement.current.value : "")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallBack(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.state.newPostText}
                              onChange={onChangeHandler}/>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;


