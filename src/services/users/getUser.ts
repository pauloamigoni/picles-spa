
import { IUser } from "../../interfaces/user"
import httpClient from "../api/httpClient"

export async function getUser(): Promise<IUser> {
    try {
        const response = await httpClient.get('/user')
        return response.data
    } catch (error) {
        console.error('Erro ao buscar usuarios', error)
        throw error
    }

}