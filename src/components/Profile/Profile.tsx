import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../Redux/profileReducer";

type ProfileProps = {
    profile: ProfileType | undefined
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

