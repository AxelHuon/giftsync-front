/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * gift-sync-back-end
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
    DefinedInitialDataOptions,
    DefinedUseQueryResult,
    MutationFunction,
    QueryFunction,
    QueryKey,
    UndefinedInitialDataOptions,
    UseMutationOptions,
    UseMutationResult,
    UseQueryOptions,
    UseQueryResult,
} from '@tanstack/react-query'
import type {
    ErrorResponseApiDTO,
    UserClassEditPasswordRequestApiDTO,
    UserClassEditPasswordResponseApiDTO,
    UserClassEditRequestApiDTO,
    UserClassGetResponseApiDTO,
} from './Api.schemas'
import { customInstance } from '../customInstance'
import type { ErrorType, BodyType } from '../customInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const getRoomOfAUser = (
    userId: string,
    options?: SecondParameter<typeof customInstance>,
    signal?: AbortSignal
) => {
    return customInstance<unknown>(
        { url: `/user/${userId}/rooms`, method: 'GET', signal },
        options
    )
}

export const getGetRoomOfAUserQueryKey = (userId: string) => {
    return [`/user/${userId}/rooms`] as const
}

export const getGetRoomOfAUserQueryOptions = <
    TData = Awaited<ReturnType<typeof getRoomOfAUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomOfAUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {}

    const queryKey = queryOptions?.queryKey ?? getGetRoomOfAUserQueryKey(userId)

    const queryFn: QueryFunction<
        Awaited<ReturnType<typeof getRoomOfAUser>>
    > = ({ signal }) => getRoomOfAUser(userId, requestOptions, signal)

    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    } as UseQueryOptions<
        Awaited<ReturnType<typeof getRoomOfAUser>>,
        TError,
        TData
    > & { queryKey: QueryKey }
}

export type GetRoomOfAUserQueryResult = NonNullable<
    Awaited<ReturnType<typeof getRoomOfAUser>>
>
export type GetRoomOfAUserQueryError = ErrorType<ErrorResponseApiDTO>

export function useGetRoomOfAUser<
    TData = Awaited<ReturnType<typeof getRoomOfAUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options: {
        query: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomOfAUser>>,
                TError,
                TData
            >
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomOfAUser>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomOfAUser<
    TData = Awaited<ReturnType<typeof getRoomOfAUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomOfAUser>>,
                TError,
                TData
            >
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomOfAUser>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomOfAUser<
    TData = Awaited<ReturnType<typeof getRoomOfAUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomOfAUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetRoomOfAUser<
    TData = Awaited<ReturnType<typeof getRoomOfAUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomOfAUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetRoomOfAUserQueryOptions(userId, options)

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
        queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
}

export const getUserById = (
    userId: string,
    options?: SecondParameter<typeof customInstance>,
    signal?: AbortSignal
) => {
    return customInstance<UserClassGetResponseApiDTO>(
        { url: `/user/${userId}`, method: 'GET', signal },
        options
    )
}

export const getGetUserByIdQueryKey = (userId: string) => {
    return [`/user/${userId}`] as const
}

export const getGetUserByIdQueryOptions = <
    TData = Awaited<ReturnType<typeof getUserById>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getUserById>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {}

    const queryKey = queryOptions?.queryKey ?? getGetUserByIdQueryKey(userId)

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserById>>> = ({
        signal,
    }) => getUserById(userId, requestOptions, signal)

    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    } as UseQueryOptions<
        Awaited<ReturnType<typeof getUserById>>,
        TError,
        TData
    > & { queryKey: QueryKey }
}

export type GetUserByIdQueryResult = NonNullable<
    Awaited<ReturnType<typeof getUserById>>
>
export type GetUserByIdQueryError = ErrorType<ErrorResponseApiDTO>

export function useGetUserById<
    TData = Awaited<ReturnType<typeof getUserById>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options: {
        query: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getUserById>>,
                TError,
                TData
            >
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getUserById>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUserById<
    TData = Awaited<ReturnType<typeof getUserById>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getUserById>>,
                TError,
                TData
            >
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getUserById>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUserById<
    TData = Awaited<ReturnType<typeof getUserById>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getUserById>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetUserById<
    TData = Awaited<ReturnType<typeof getUserById>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getUserById>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetUserByIdQueryOptions(userId, options)

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
        queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
}

export const patchUserInformations = (
    userId: string,
    userClassEditRequestApiDTO: BodyType<UserClassEditRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<UserClassGetResponseApiDTO>(
        {
            url: `/user/${userId}`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            data: userClassEditRequestApiDTO,
        },
        options
    )
}

export const getPatchUserInformationsMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchUserInformations>>,
        TError,
        { userId: string; data: BodyType<UserClassEditRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof patchUserInformations>>,
    TError,
    { userId: string; data: BodyType<UserClassEditRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof patchUserInformations>>,
        { userId: string; data: BodyType<UserClassEditRequestApiDTO> }
    > = (props) => {
        const { userId, data } = props ?? {}

        return patchUserInformations(userId, data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type PatchUserInformationsMutationResult = NonNullable<
    Awaited<ReturnType<typeof patchUserInformations>>
>
export type PatchUserInformationsMutationBody =
    BodyType<UserClassEditRequestApiDTO>
export type PatchUserInformationsMutationError = ErrorType<ErrorResponseApiDTO>

export const usePatchUserInformations = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchUserInformations>>,
        TError,
        { userId: string; data: BodyType<UserClassEditRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof patchUserInformations>>,
    TError,
    { userId: string; data: BodyType<UserClassEditRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getPatchUserInformationsMutationOptions(options)

    return useMutation(mutationOptions)
}
export const patchPassword = (
    userId: string,
    userClassEditPasswordRequestApiDTO: BodyType<UserClassEditPasswordRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<UserClassEditPasswordResponseApiDTO>(
        {
            url: `/user/${userId}/edit-password`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            data: userClassEditPasswordRequestApiDTO,
        },
        options
    )
}

export const getPatchPasswordMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchPassword>>,
        TError,
        { userId: string; data: BodyType<UserClassEditPasswordRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof patchPassword>>,
    TError,
    { userId: string; data: BodyType<UserClassEditPasswordRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof patchPassword>>,
        { userId: string; data: BodyType<UserClassEditPasswordRequestApiDTO> }
    > = (props) => {
        const { userId, data } = props ?? {}

        return patchPassword(userId, data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type PatchPasswordMutationResult = NonNullable<
    Awaited<ReturnType<typeof patchPassword>>
>
export type PatchPasswordMutationBody =
    BodyType<UserClassEditPasswordRequestApiDTO>
export type PatchPasswordMutationError = ErrorType<ErrorResponseApiDTO>

export const usePatchPassword = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchPassword>>,
        TError,
        { userId: string; data: BodyType<UserClassEditPasswordRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof patchPassword>>,
    TError,
    { userId: string; data: BodyType<UserClassEditPasswordRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getPatchPasswordMutationOptions(options)

    return useMutation(mutationOptions)
}
