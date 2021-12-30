import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../Redux/state";

export type MyPostsProps = {
    state: Array<PostsType>
}

function MyPosts(props: MyPostsProps) {

    const postsElement = props.state.map(m => {
        return <Post message={m.messages} likes={m.likesCount}/>
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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


