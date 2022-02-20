import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderProps = {
    isAuth: boolean
    login: string | null
}

function Header(props: HeaderProps) {
    return (
        <header className={s.header}>
            <img src='https://iconape.com/wp-content/png_logo_vector/react.png' alt={''}/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;