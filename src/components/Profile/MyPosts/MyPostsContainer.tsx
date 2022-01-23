import React, {ChangeEvent} from "react";
import {addPostAC, changeNewTextOnPostAC} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const addPost = () => {
                    store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                }
                const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(changeNewTextOnPostAC(e.currentTarget.value))
                }
                const newPostText = store.getState().profilePage.newPostText;
                const posts = store.getState().profilePage.posts;
                return (
                    <MyPosts newPostText={newPostText}
                             posts={posts}
                             addPost={addPost}
                             updateNewPostText={(e) => updateNewPostText(e)}/>
                )
            }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;


