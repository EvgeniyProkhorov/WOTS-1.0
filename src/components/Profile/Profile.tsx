import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profileReducer";
import {Redirect} from "react-router-dom";

type ProfileProps = {
    profile: ProfileType | undefined
    isAuth: boolean
}

function Profile(props: ProfileProps) {
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

