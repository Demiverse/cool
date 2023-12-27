import { useState, useEffect, useRef } from "react";

const useSound = (src: string) => {
	const [muted, setMuted] = useState<boolean>(false);
	const audioRef = useRef<HTMLAudioElement>(new Audio(src));
	audioRef.current.volume = 0.12;
	audioRef.current.loop = true;
	audioRef.current.muted = muted;

	useEffect(() => {
		if (audioRef.current) audioRef.current.play();
		return () => {
			if (audioRef.current) audioRef.current.pause();
		};
	}, []);

	const toggleMuteBgSound = () => {
		setMuted(!muted);
		audioRef.current.muted = !muted;
	};

	const pauseBgSound = () => {
		audioRef.current.pause();
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
