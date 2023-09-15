import style from "./style.module.css"
import {clsx} from "../../utils/utils";
export const Button = () => {
  return (
      <div className={style.arrow}>
          <div className={clsx(style.default, style.defaultImage)}>
          </div>
          <div className={clsx(style.default, style.active, style.activeImage)}>
          </div>
      </div>
  )
}