import { DropListItem } from "./types/dropListItem"
import style from "./styles/item.module.scss"

interface Props<T> {
    item: DropListItem
    onSelect: (id: T) => void
}

export function Item<T>({ item, onSelect }: Props<T>) {
    return (
        <div>
            <button
                className={style.item}
                onClick={() => onSelect(item.id)}
                draggable={false}
            >
                {item.text}
            </button>
        </div>
    )
}
