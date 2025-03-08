import { FC } from "react"
import errorIcon from "/error.svg"
import style from "./styles/errorLabel.module.scss"

interface Props {}

export const ErrorLabel: FC<Props> = () => {
    return (
        <div className={style.errorLabel}>
            <img src={errorIcon} draggable={false} />
            <p>Ошибка: не удалось загрузить информацию</p>
        </div>
    )
}
