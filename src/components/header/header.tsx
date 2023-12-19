import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import React from "react";
import { clsx } from "../../utils/utils";

interface Props {
	showMenu?: boolean;
}

export const Header: React.FC<Props> = ({ showMenu = true }) => {
	const isActiveLink: (a: { isActive: boolean }) => string = ({ isActive }) =>
		clsx(style.link, isActive && style.active);
	return (
		<div className={style.header}>
			<div className={style.div7} style={{ color: "white" }}>
				<img className={style.icons} alt="" src="/icons4.svg" />
					<a
						className={clsx(style.link, style.active, style.div8)}
						href="https://alloder.ru">
						Назад на сайт
					</a>
			</div>
			{showMenu ? (
				<div className={style.menu}>
					<NavLink to="/" className={isActiveLink}>
						Главная
					</NavLink>
					<NavLink to="/frame-285" className={isActiveLink}>
						Персонажи
					</NavLink>
				</div>
			) : null}
		</div>
	);
};
