import { date, number, object, string } from "yup"
import { MatchStatus, matchStatusSchema } from "./matchStatus"
import { Team, teamSchema } from "./team"

export type Match = {
    awayScore: number
    awayTeam: Team
    homeScore: number
    homeTeam: Team
    status: MatchStatus
    time: Date
    title: string
}

export const matchSchema = object({
    awayScore: number().required(),
    awayTeam: teamSchema.required(),
    homeScore: number().required(),
    homeTeam: teamSchema.required(),
    status: matchStatusSchema.required(),
    time: date().required(),
    title: string().required(),
})
