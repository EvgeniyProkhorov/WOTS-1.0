import React, {ChangeEvent} from "react";
import {addPostAC, changeNewTextOnPostAC} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../Redux/redux-store";

type MyPostsContainerProps = {
    store: ReduxStoreType
}

function MyPostsContainer(props: MyPostsContainerProps) {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewTextOnPostAC(e.currentTarget.value))
    }

    return (
        <MyPosts newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}
                 addPost={addPost}
                 updateNewPostText={(e) => updateNewPostText(e)}/>
    )
}

export default MyPostsContainer;


