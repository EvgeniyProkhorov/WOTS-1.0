import React from "react";
import {FriendsType} from "../Redux/state";

type FriendsProps = {
    friends: Array<FriendsType>
}

export function Friends (props: FriendsProps) {
    return (
        <div>
            <div>Friends</div>
            <div>
                {props.friends.map(e => <span>{e.name} </span>)}
            </div>

        </div>
    )
}