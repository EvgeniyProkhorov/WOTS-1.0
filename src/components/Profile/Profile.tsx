import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../Redux/redux-store";


export type ProfileProps = {
    store: ReduxStoreType
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;

