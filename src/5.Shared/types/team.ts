import { array, number, object, string } from "yup"
import { Player, playerSchema } from "./player"

export type Team = {
    name: string
    place: number
    players: Player[]
    points: number
    total_kills: number
}

export const teamSchema = object({
    name: string().required(),
    place: number().required(),
    players: array(playerSchema).required(),
    points: number().required(),
    total_kills: number().required(),
})
