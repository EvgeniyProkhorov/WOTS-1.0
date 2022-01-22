import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../Redux/store";


export type MyPostsProps = {
    newPostText: string
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


function MyPosts(props: MyPostsProps) {
    const postsElement = props.posts.map(m => {
        return <Post key={m.id} message={m.messages} likes={m.likesCount}/>
    })
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={(e)=>props.updateNewPostText(e)}/>
                </div>
                <div className={s.button}>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;


