import { clsx } from "utils/utils";
import style from "./style.module.scss";

interface Props {
	className?: string;
}

export const Border = ({ className }: Props) => <div className={clsx(style.border, className)} />;
