import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemType) {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}