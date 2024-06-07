import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IUser } from "../interfaces/user";
import { getUser } from "../services/users/getUser";


export function useUser(
    options?: Partial<UseQueryOptions<IUser, Error>>):
    UseQueryResult<IUser, Error> {
    const result = useQuery({
        staleTime: Infinity,
        ...options,
        queryKey: ['get-user'],
        queryFn: () => getUser(),
    })
    return result
}