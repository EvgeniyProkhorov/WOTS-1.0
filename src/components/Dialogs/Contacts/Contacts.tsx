import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type ContType = {
    name: string
    id: number
}

export function Contacts(props: ContType) {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}