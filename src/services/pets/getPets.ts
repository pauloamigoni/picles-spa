import { GetPetsResponse, GetPetsResquest } from "../../interfaces/pet"
import httpClient from "../api/httpClient"

export async function getPets(params?: GetPetsResquest) :Promise<GetPetsResponse> {
    try {
        const response = await httpClient.get('/pet', { params })
        return response.data
    }catch (error) {
        console.log('error' ,error)
        throw error
    }

}