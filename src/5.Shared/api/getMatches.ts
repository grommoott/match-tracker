import { config } from "@config"
import { Match, matchSchema } from "@types"
import ky from "ky"
import { array, boolean, object } from "yup"

const responseSchema = object({
    ok: boolean().required(),
    data: object({ matches: array(matchSchema).required() }).required(),
})

export const getMatches = async (): Promise<Match[]> => {
    const response = await responseSchema.validate(
        await ky.get(`${config.apiUrl}/fronttemp`).json(),
    )

    return response.data.matches
}
