import { Match } from "@types"
import { FC } from "react"
import style from "./styles/matchCard.module.scss"
import teamIcon from "/team-icon.svg"
import { CardStatus } from "@ui/CardStatus"

interface Props {
    match: Match
}

export const MatchCard: FC<Props> = ({ match }) => {
    return (
        <div className={style.matchCard}>
            <div className={style.teamContainer}>
                <img src={teamIcon} draggable={false} />
                <p>{match.homeTeam.name}</p>
            </div>

            <div className={style.scoreContainer}>
                <p>
                    {match.homeScore} : {match.awayScore}
                </p>
                <CardStatus status={match.status} />
            </div>

            <div className={style.teamContainer}>
                <p>{match.awayTeam.name}</p>
                <img src={teamIcon} draggable={false} />
            </div>
        </div>
    )
}
