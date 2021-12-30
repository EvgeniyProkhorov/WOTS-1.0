import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {inputChanges, PostsType} from "../../Redux/state";

export type MyPostsProps = {
    state: Array<PostsType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsProps) {

    const postsElement = props.state.map(m => {
        return <Post message={m.messages} likes={m.likesCount}/>
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value.trim())
            newPostElement.current.value = ''

        }
        // props.addPost(newPostElement.current ? newPostElement.current.value : "")
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={()=>inputChanges()}> </textarea>
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


