import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "../../utils/utils";
import style from "./style.module.scss";

interface Props {
	showMenu?: boolean;
}

export const Navigation: FunctionComponent<Props> = ({ showMenu = true }) => {
	const isActiveLink: (a: { isActive: boolean }) => string = ({ isActive }) =>
		clsx(style.link, isActive && style.active);
	return (

		<div className={clsx(style.nav, !showMenu && style.withoutMenu)}>
			<div className={style.visitSite}>
				<img className={style.icons} src="/icons4.svg" />
				<a
					className={clsx(style.link, style.active)}
					href="https://alloder.ru">
					Назад на сайт
				</a>
			</div>

			{showMenu && (
				<div className={style.menu}>
					<NavLink to="/" className={isActiveLink}>
						Главная
					</NavLink>
					<NavLink to="/characters" className={isActiveLink}>
						Персонажи
					</NavLink>
				</div>
			)}
			<div className={style.container}>
				<a className={style.playButton} href="https://allod-strasti.ru/">Играть сейчас</a>
			</div>
		</div>
	);
};


