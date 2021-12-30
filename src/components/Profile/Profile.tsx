import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../Redux/state";


export type ProfileProps = {
    state: Array<PostsType>
    addPost: (postMessage: string) => void
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;

