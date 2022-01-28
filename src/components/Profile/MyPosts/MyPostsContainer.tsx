import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {addPostAC, changeNewTextOnPostAC, PostsType} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchPropsType = {
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}
export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeNewTextOnPostAC(e.currentTarget.value))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


// function MyPostsContainer() {
//     return (
//         <StoreContextNotForProj.Consumer>
//             {(store) => {
//
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                     store.dispatch(changeNewTextOnPostAC(e.currentTarget.value))
//                 }
//                 const newPostText = store.getState().profilePage.newPostText;
//                 const posts = store.getState().profilePage.posts;
//                 return (
//                     <MyPosts newPostText={newPostText}
//                              posts={posts}
//                              addPost={addPost}
//                              updateNewPostText={(e) => updateNewPostText(e)}/>
//                 )
//             }
//             }
//         </StoreContextNotForProj.Consumer>
//
//     )
// }



