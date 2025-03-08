import { number, object, string } from "yup"

export type Player = {
    kills: number
    username: string
}

export const playerSchema = object({
    kills: number().required(),
    username: string().required(),
})
