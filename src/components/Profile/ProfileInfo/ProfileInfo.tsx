import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType | undefined
}

export function ProfileInfo(props: ProfileInfoProps) {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt={''}/>
            </div>
            <div className={s.descBlock}>
                <img src={props.profile?.photos.large} alt={'avatar'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.github}</div>
            </div>
        </div>
    )
}