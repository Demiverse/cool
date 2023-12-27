import { useState, useEffect } from "react";
import { useAudio } from "../shared/providers/audio";

const useSound = (src: string) => {
	const audio = useAudio();
	const [muted, setMuted] = useState<boolean>(audio.muted);

	const changeAudio = async (src: string) => {
		const timeStep = 50;
		const volumeStep = 0.05;
		const volume = audio.volume;
		await new Promise((resolve) => {
			const interval = setInterval(() => {
				if (audio.volume <= 0) {
					clearInterval(interval);
					return resolve(null);
				}
				const nextVolume = audio.volume - volumeStep;
				audio.volume = nextVolume < 0 ? 0 : nextVolume;
			}, timeStep);
		});
		audio.pause();
		audio.src = src;
		audio.play().catch(console.error);
		await new Promise((resolve) => {
			const interval = setInterval(() => {
				if (audio.volume >= volume) {
					clearInterval(interval);
					return resolve(null);
				}
				const nextVolume = audio.volume + volumeStep;
				audio.volume = nextVolume > volume ? volume : nextVolume;
			}, timeStep);
		});
	};

	useEffect(() => {
		if (audio.paused) audio.play().catch(console.error);
	}, []);

	useEffect(() => {
		const url = audio.src ? new URL(audio.src) : null;
		if (url?.pathname !== src) {
			changeAudio(src).finally();
		}
	}, [src]);

	const toggleMuteBgSound = () => {
		setMuted(!muted);
		audio.muted = !muted;
	};

	const pauseBgSound = () => {
		audio.pause();
	};

	const returnedValue: any = [
		muted,
		{
			pauseBgSound,
			toggleMuteBgSound,
		},
	];

	return returnedValue;
};

export default useSound;
