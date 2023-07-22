import style from "./style.module.css";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import {clsx} from "../../utils/utils";

interface Props {
    center?: boolean;
    showMenu?: boolean;
}

export const Header: React.FC<Props> = ({center, showMenu = true}) => {
   const isActiveLink: (a:{isActive:boolean})=>string = ({isActive}) =>clsx(style.link, isActive && style.active);
    return (
        <div className={style.header} data-center={center}>
            <div className={style.div7} style={{background:"red"}}>
                <img className={style.icons} alt="" src="/icons4.svg"/>
                <div className={clsx(style.link, style.div8)}>
                    <a href="https://alloder.ru">Назад на сайт</a>
                </div>
            </div>
            {showMenu ?
                <div className={style.menu}>
                    <NavLink to="/" className={isActiveLink}>Главная</NavLink>
                    <NavLink to="/frame-285" className={isActiveLink}>Персонажи</NavLink>
                    <NavLink to="/" className={({isActive})=>clsx(isActiveLink({isActive}), style.disabled)}>Новости</NavLink>
                    <NavLink to="/" className={({isActive})=>clsx(isActiveLink({isActive}), style.disabled)}>Информация</NavLink>
                </div>
                : null}
        </div>
    )
}