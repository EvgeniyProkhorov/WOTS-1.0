import s from "../Dialogs.module.css";
import React from "react";

type MessagesType = {
    message: string
}

export function Messages(props: MessagesType) {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}