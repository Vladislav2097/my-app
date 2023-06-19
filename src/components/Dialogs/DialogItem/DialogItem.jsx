import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    let path = `${props.id}`;
    return (<div className={s.dialog + ' ' + s.active}>
        <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" />
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}


export default DialogItem;