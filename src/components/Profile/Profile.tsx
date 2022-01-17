import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../Redux/state";


export type ProfileProps = {
    state: ProfilePageType
    // addPost: (postMessage: string) => void
    // changeNewTextCallBack: (message: string) => void
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     // addPost={props.addPost}
                     dispatch={props.dispatch}
                     // changeNewTextCallBack={props.changeNewTextCallBack}
            />
        </div>
    )
}

export default Profile;

