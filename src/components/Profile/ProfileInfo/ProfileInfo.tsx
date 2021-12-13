import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className={s.descBlock}>
                ava+decs
            </div>
        </div>
    )
}