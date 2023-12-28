import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backgroundSound from "./backgroundSound.mp3";
import useSound from "hooks/useSound";
import { useScroll } from "hooks/useScroll";
import { Navigation } from "components/navigation/navigation";
import MuteButton from "components/muteButton/MuteButton";
import { Border } from "shared/ui/border";
import { clsx } from "utils/utils";
import styles from "./style.module.scss";

const CharactersPage: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const onImageClick = useCallback(() => {
		navigate("/ann");
	}, [navigate]);

	const onImage1Click = useCallback(() => {
		navigate("/yasker");
	}, [navigate]);

	const onImage2Click = useCallback(() => {
		navigate("/nayan");
	}, [navigate]);

	const onImage3Click = useCallback(() => {
		navigate("/smeyana");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	return (
		<div className={styles.page}>
			<Navigation />
			<MuteButton muted={muted} toggleMuteBgSound={toggleMuteBgSound} />
			<div className={styles.content}>
				<Border className={clsx(styles.border, styles.top)} />
				<div className={styles.carousel} data-variant={"v2"}>
					<Slide link='/characters/nayan/6@2x.webp' onClick={onImage2Click} className={styles.nayan} />
					<Slide link='/characters/smeyana/7@2x.webp' onClick={onImage3Click} className={styles.smeyana} />
					<Slide link='/characters/ann/4@2x.webp' onClick={onImageClick} className={styles.ann} />
					<Slide link='/characters/yasker/5@2x.webp' onClick={onImage1Click} className={styles.yasker} />
				</div>
				<Border className={clsx(styles.border, styles.bottom)} />
			</div>
		</div>
	);
};

const Slide = ({ link, className, onClick }: { className?: string; link: string; onClick: () => void }) => (
	<div className={clsx(styles.slide, className)} onClick={onClick}>
		<img alt="" src={link} />
	</div>
);

export default CharactersPage;