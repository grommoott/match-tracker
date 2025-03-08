import { FC, useCallback, useEffect, useState } from "react"
import style from "./styles/matchListWidget.module.scss"
import { Match } from "@types"
import { getMatches } from "@api/getMatches"
import { MatchCard } from "@entities/MatchCard"
import logo from "/logo.svg"
import { RefreshButton } from "@ui/RefreshButton"
import { ErrorLabel } from "./ErrorLabel"

interface Props {}

export const MatchListWidget: FC<Props> = () => {
    const [matches, setMatches] = useState<Match[]>([])
    const [isLoading, setLoading] = useState(false)
    const [isFailed, setFailed] = useState(false)

    const refresh = useCallback(async () => {
        try {
            setFailed(false)
            setLoading(true)

            setMatches(await getMatches())
        } catch (e) {
            setFailed(true)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setFailed, setMatches])

    useEffect(() => {
        refresh()
    }, [])

    return (
        <div className={style.matchListWidget}>
            <div className={style.topBarContainer}>
                <img src={logo} draggable={false} />
                <div>
                    {isFailed && <ErrorLabel></ErrorLabel>}
                    <RefreshButton onClick={refresh} isLoading={isLoading} />
                </div>
            </div>
            <div className={style.matchesContainer}>
                {matches.map((match) => (
                    <MatchCard match={match} key={match.title} />
                ))}
            </div>
        </div>
    )
}
