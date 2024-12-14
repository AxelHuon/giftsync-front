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
    GetRoomOfUserResponseApiDTO,
    PatchUserApiBodies,
    UserClassEditPasswordRequestApiDTO,
    UserClassEditPasswordResponseApiDTO,
    UserClassEditResponseApiDTO,
    UserClassGetResponseApiDTO,
} from './Api.schemas'
import { customInstance } from '../customInstance'
import type { ErrorType, BodyType } from '../customInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

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

export const patchUser = (
    userId: string,
    patchUserApiBodies?: BodyType<PatchUserApiBodies>,
    options?: SecondParameter<typeof customInstance>
) => {
    const formData = new FormData()
    if (patchUserApiBodies?.firstName !== undefined) {
        formData.append('firstName', patchUserApiBodies.firstName)
    }
    if (patchUserApiBodies?.lastName !== undefined) {
        formData.append('lastName', patchUserApiBodies.lastName)
    }
    if (patchUserApiBodies?.dateOfBirth !== undefined) {
        formData.append('dateOfBirth', patchUserApiBodies.dateOfBirth)
    }
    if (patchUserApiBodies?.profilePicture !== undefined) {
        formData.append('profilePicture', patchUserApiBodies.profilePicture)
    }

    return customInstance<UserClassEditResponseApiDTO>(
        {
            url: `/user/${userId}`,
            method: 'PATCH',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
        },
        options
    )
}

export const getPatchUserMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchUser>>,
        TError,
        { userId: string; data: BodyType<PatchUserApiBodies> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof patchUser>>,
    TError,
    { userId: string; data: BodyType<PatchUserApiBodies> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof patchUser>>,
        { userId: string; data: BodyType<PatchUserApiBodies> }
    > = (props) => {
        const { userId, data } = props ?? {}

        return patchUser(userId, data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type PatchUserMutationResult = NonNullable<
    Awaited<ReturnType<typeof patchUser>>
>
export type PatchUserMutationBody = BodyType<PatchUserApiBodies>
export type PatchUserMutationError = ErrorType<ErrorResponseApiDTO>

export const usePatchUser = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof patchUser>>,
        TError,
        { userId: string; data: BodyType<PatchUserApiBodies> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof patchUser>>,
    TError,
    { userId: string; data: BodyType<PatchUserApiBodies> },
    TContext
> => {
    const mutationOptions = getPatchUserMutationOptions(options)

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
export const getRoomsOfUser = (
    userId: string,
    options?: SecondParameter<typeof customInstance>,
    signal?: AbortSignal
) => {
    return customInstance<GetRoomOfUserResponseApiDTO[]>(
        { url: `/user/${userId}/rooms`, method: 'GET', signal },
        options
    )
}

export const getGetRoomsOfUserQueryKey = (userId: string) => {
    return [`/user/${userId}/rooms`] as const
}

export const getGetRoomsOfUserQueryOptions = <
    TData = Awaited<ReturnType<typeof getRoomsOfUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomsOfUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {}

    const queryKey = queryOptions?.queryKey ?? getGetRoomsOfUserQueryKey(userId)

    const queryFn: QueryFunction<
        Awaited<ReturnType<typeof getRoomsOfUser>>
    > = ({ signal }) => getRoomsOfUser(userId, requestOptions, signal)

    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    } as UseQueryOptions<
        Awaited<ReturnType<typeof getRoomsOfUser>>,
        TError,
        TData
    > & { queryKey: QueryKey }
}

export type GetRoomsOfUserQueryResult = NonNullable<
    Awaited<ReturnType<typeof getRoomsOfUser>>
>
export type GetRoomsOfUserQueryError = ErrorType<ErrorResponseApiDTO>

export function useGetRoomsOfUser<
    TData = Awaited<ReturnType<typeof getRoomsOfUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options: {
        query: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomsOfUser>>,
                TError,
                TData
            >
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomsOfUser>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomsOfUser<
    TData = Awaited<ReturnType<typeof getRoomsOfUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomsOfUser>>,
                TError,
                TData
            >
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomsOfUser>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomsOfUser<
    TData = Awaited<ReturnType<typeof getRoomsOfUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomsOfUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetRoomsOfUser<
    TData = Awaited<ReturnType<typeof getRoomsOfUser>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    userId: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomsOfUser>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetRoomsOfUserQueryOptions(userId, options)

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
        queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
}
