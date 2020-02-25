import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.kek} src='https://vk.com/images/brand/vk-logo--fb.png' />
        </header>
    )
}

export default Header;