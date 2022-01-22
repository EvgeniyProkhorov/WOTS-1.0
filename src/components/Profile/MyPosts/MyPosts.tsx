import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, ProfilePageType} from "../../Redux/store";
import {addPostAC, changeNewTextOnPostAC} from "../../Redux/profileReducer";
// import {AppDispatch} from "../../Redux/redux-store";

export type MyPostsProps = {
    state: ProfilePageType
    // addPost: (postMessage: string) => void
    // changeNewTextCallBack: (message: string) => void
    dispatch: (action: ActionsType) => void
}


function MyPosts(props: MyPostsProps) {

    const postsElement = props.state.posts.map(m => {
        return <Post key={m.id} message={m.messages} likes={m.likesCount}/>
    })
    const addPost = () => {
        // AppDispatch(addPostAC(props.state.newPostText))
        props.dispatch(addPostAC(props.state.newPostText))

        // let newPostText = addPostAC(props.state.newPostText)
        // props.dispatch({type: "ADD-POST", postMessage: props.state.newPostText})
        // props.addPost(props.state.newPostText)
        // props.addPost(newPostElement.current ? newPostElement.current.value : "")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // AppDispatch(changeNewTextOnPostAC(e.currentTarget.value))
        props.dispatch(changeNewTextOnPostAC(e.currentTarget.value))
        // props.changeNewTextCallBack(e.currentTarget.value)
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


