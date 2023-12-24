import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { isMobile } from "utils/utils";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
import MuteButton from "components/muteButton/MuteButton";
import { Border } from "shared/ui/border";
import styles from "../character.module.scss";

const Page: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const onArrowLeftHighlighted1ImageClick = useCallback(() => {
		navigate("/frame-282");
	}, [navigate]);

	const onArrowLeftNormal1ImageClick = useCallback(() => {
		navigate("/frame-280");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	const prefix = '/characters/nayan';
	const logoSrc = isMobile() ? 'rectangle-22@2x-mob.png' : 'rectangle-22@2x-light.png';
	
	return (
		<div className={styles.page}>
			<div ref={ref} className={styles.container}>
				<Header showMenu={false} />
				<MuteButton muted={muted} toggleMuteBgSound={toggleMuteBgSound} />
				<img className={styles.background} src="/f-3-22@2x-cropped.webp" />
				<img className={styles.characterBackground} src={`${prefix}/background.webp`} />
				<img className={styles.logo} src={`/${logoSrc}`} />
				<Border className={styles.topBorder}/>
				<div className={styles.character}>
					<div className={styles.creator}>Художник: аNон</div>
					<div className={styles.name}>Найан</div>
					<p className={styles.about}>
						Эрудированный историк, обладатель древнейших артефактов, наследник королевского рода и один из самых
						долгоживущих эльфов. Имя ему — Найан ди Дернье. Лишь немногие в Сарнауте могут посоревноваться с его
						кладезем знаний.<br/>Он был свидетелем разрушительного Катаклизма, наблюдал за основанием целых
						государств и повстречал множество людей, сыгравших важную роль в истории Сарнаута. Но кто-то сыграл
						важную роль именно в его жизни, оставив глубокий отпечаток в душе.
					</p>
					<div className={styles.goBack}>
						<img className={styles.icons} src="/icons4.svg" />
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<div className={styles.avatar}>
					<img src={`${prefix}/own-page-avatar.png`} />
				</div>
				<div className={styles.prev} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.next} onClick={onArrowLeftNormal1ImageClick} />
				<Border className={styles.bottomBorder}/>
				{ isMobile() && <Border className={styles.mobileBorder}/> }
			</div>
		</div>
	);
};

export default Page;
