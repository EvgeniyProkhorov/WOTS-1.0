import React from 'react';
import s from './Dialogs.module.css'
import {Contacts} from "./Contacts/Contacts";
import {Messages} from "./Messages/Messages";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <Contacts name='Evgen' id={1}/>
                <Contacts name='User2' id={2}/>
                <Contacts name='User3' id={3}/>
                <Contacts name='User4' id={4}/>
                <Contacts name='User5' id={5}/>
            </div>
            <div className={s.messages}>
                <Messages message='Hello'/>
                <Messages message='How are you?'/>
                <Messages message='What are you doing?'/>
            </div>
        </div>
    )
}

export default Dialogs;
