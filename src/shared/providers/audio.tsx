import { type PropsWithChildren, createContext, useContext } from "react";

const audio = new Audio();
audio.volume = 0.12;
audio.loop = true;
audio.muted = false;
const context = createContext(audio);
const Provider = context.Provider;
export const useAudio = () => useContext(context);
export const AudioProvider = ({ children }: PropsWithChildren) => <Provider value={audio}>{children}</Provider>;
