import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <Post message="Привет!" likes={15}/>
                    <Post message="Как дела?" likes={20}/>
                </div>
            </div>
    )
}

export default MyPosts;


