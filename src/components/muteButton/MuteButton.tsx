import { FunctionComponent } from "react";
import { ReactComponent as VolumeMuteIcon } from './volume-mute.svg';
import { ReactComponent as VolumeUpIcon } from './volume-up.svg';
import style from "./style.module.scss"

interface Props {
	muted?: boolean;
  toggleMuteBgSound: () => void;
}

const MuteButton: FunctionComponent<Props> = ({ muted = false, toggleMuteBgSound }) => {
  return (
		<button type="button" className={style.bgSoundControl} onClick={toggleMuteBgSound}>
      {
        muted ?
        <VolumeMuteIcon className={style.icon} /> :
        <VolumeUpIcon className={style.icon} />
      }
		</button>
  );
}

export default MuteButton;