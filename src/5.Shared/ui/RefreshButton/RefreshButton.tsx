import { FC } from "react"
import style from "./styles/refreshButton.module.scss"
import refreshImage from "/refresh.svg"

interface Props {
    onClick?: () => void
    isLoading?: boolean
}

export const RefreshButton: FC<Props> = ({
    onClick = () => {},
    isLoading = false,
}) => {
    return (
        <button className={style.refreshButton} onClick={onClick}>
            <p>Обновить</p>
            <img
                src={refreshImage}
                className={`${style.refreshImage} ${isLoading && style.spinning}`}
            />
        </button>
    )
}
