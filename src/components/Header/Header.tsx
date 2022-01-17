import React from "react";
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img src='https://iconape.com/wp-content/png_logo_vector/react.png' alt={''}/>
        </header>
    )
}

export default Header;