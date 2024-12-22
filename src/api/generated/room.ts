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
    CreateRoomRequestApiDTO,
    EditRoomRequestApiDTO,
    ErrorResponseApiDTO,
    GetRoomElementApiDTO,
    InviteUserRequestApiDTO,
    InviteUsersToARoom200,
    JoinRoomRequestApiDTO,
    JoinRoomResponseApiDTO,
    RoomAttributesApiDTO,
} from './Api.schemas'
import { customInstance } from '../customInstance'
import type { ErrorType, BodyType } from '../customInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const createRoom = (
    createRoomRequestApiDTO: BodyType<CreateRoomRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<RoomAttributesApiDTO>(
        {
            url: `/room/create`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: createRoomRequestApiDTO,
        },
        options
    )
}

export const getCreateRoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof createRoom>>,
        TError,
        { data: BodyType<CreateRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof createRoom>>,
    TError,
    { data: BodyType<CreateRoomRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof createRoom>>,
        { data: BodyType<CreateRoomRequestApiDTO> }
    > = (props) => {
        const { data } = props ?? {}

        return createRoom(data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type CreateRoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof createRoom>>
>
export type CreateRoomMutationBody = BodyType<CreateRoomRequestApiDTO>
export type CreateRoomMutationError = ErrorType<ErrorResponseApiDTO>

export const useCreateRoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof createRoom>>,
        TError,
        { data: BodyType<CreateRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof createRoom>>,
    TError,
    { data: BodyType<CreateRoomRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getCreateRoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const inviteUsersToARoom = (
    inviteUserRequestApiDTO: BodyType<InviteUserRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<InviteUsersToARoom200>(
        {
            url: `/room/invite-users`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: inviteUserRequestApiDTO,
        },
        options
    )
}

export const getInviteUsersToARoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof inviteUsersToARoom>>,
        TError,
        { data: BodyType<InviteUserRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof inviteUsersToARoom>>,
    TError,
    { data: BodyType<InviteUserRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof inviteUsersToARoom>>,
        { data: BodyType<InviteUserRequestApiDTO> }
    > = (props) => {
        const { data } = props ?? {}

        return inviteUsersToARoom(data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type InviteUsersToARoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof inviteUsersToARoom>>
>
export type InviteUsersToARoomMutationBody = BodyType<InviteUserRequestApiDTO>
export type InviteUsersToARoomMutationError = ErrorType<ErrorResponseApiDTO>

export const useInviteUsersToARoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof inviteUsersToARoom>>,
        TError,
        { data: BodyType<InviteUserRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof inviteUsersToARoom>>,
    TError,
    { data: BodyType<InviteUserRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getInviteUsersToARoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const joinRoom = (
    token: string,
    joinRoomRequestApiDTO: BodyType<JoinRoomRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<JoinRoomResponseApiDTO>(
        {
            url: `/room/join/${token}`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: joinRoomRequestApiDTO,
        },
        options
    )
}

export const getJoinRoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof joinRoom>>,
        TError,
        { token: string; data: BodyType<JoinRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof joinRoom>>,
    TError,
    { token: string; data: BodyType<JoinRoomRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof joinRoom>>,
        { token: string; data: BodyType<JoinRoomRequestApiDTO> }
    > = (props) => {
        const { token, data } = props ?? {}

        return joinRoom(token, data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type JoinRoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof joinRoom>>
>
export type JoinRoomMutationBody = BodyType<JoinRoomRequestApiDTO>
export type JoinRoomMutationError = ErrorType<ErrorResponseApiDTO>

export const useJoinRoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof joinRoom>>,
        TError,
        { token: string; data: BodyType<JoinRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof joinRoom>>,
    TError,
    { token: string; data: BodyType<JoinRoomRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getJoinRoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const deleteRoom = (
    roomId: string,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<RoomAttributesApiDTO>(
        { url: `/room/${roomId}/delete`, method: 'DELETE' },
        options
    )
}

export const getDeleteRoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteRoom>>,
        TError,
        { roomId: string },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof deleteRoom>>,
    TError,
    { roomId: string },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteRoom>>,
        { roomId: string }
    > = (props) => {
        const { roomId } = props ?? {}

        return deleteRoom(roomId, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type DeleteRoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteRoom>>
>

export type DeleteRoomMutationError = ErrorType<ErrorResponseApiDTO>

export const useDeleteRoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteRoom>>,
        TError,
        { roomId: string },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof deleteRoom>>,
    TError,
    { roomId: string },
    TContext
> => {
    const mutationOptions = getDeleteRoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const putRoom = (
    roomId: string,
    editRoomRequestApiDTO: BodyType<EditRoomRequestApiDTO>,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<RoomAttributesApiDTO>(
        {
            url: `/room/${roomId}/update`,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            data: editRoomRequestApiDTO,
        },
        options
    )
}

export const getPutRoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof putRoom>>,
        TError,
        { roomId: string; data: BodyType<EditRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof putRoom>>,
    TError,
    { roomId: string; data: BodyType<EditRoomRequestApiDTO> },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof putRoom>>,
        { roomId: string; data: BodyType<EditRoomRequestApiDTO> }
    > = (props) => {
        const { roomId, data } = props ?? {}

        return putRoom(roomId, data, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type PutRoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof putRoom>>
>
export type PutRoomMutationBody = BodyType<EditRoomRequestApiDTO>
export type PutRoomMutationError = ErrorType<ErrorResponseApiDTO>

export const usePutRoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof putRoom>>,
        TError,
        { roomId: string; data: BodyType<EditRoomRequestApiDTO> },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof putRoom>>,
    TError,
    { roomId: string; data: BodyType<EditRoomRequestApiDTO> },
    TContext
> => {
    const mutationOptions = getPutRoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const deleteUserFromARoom = (
    roomId: string,
    userId: string,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<RoomAttributesApiDTO>(
        { url: `/room/${roomId}/user/${userId}`, method: 'DELETE' },
        options
    )
}

export const getDeleteUserFromARoomMutationOptions = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteUserFromARoom>>,
        TError,
        { roomId: string; userId: string },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
    Awaited<ReturnType<typeof deleteUserFromARoom>>,
    TError,
    { roomId: string; userId: string },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {}

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteUserFromARoom>>,
        { roomId: string; userId: string }
    > = (props) => {
        const { roomId, userId } = props ?? {}

        return deleteUserFromARoom(roomId, userId, requestOptions)
    }

    return { mutationFn, ...mutationOptions }
}

export type DeleteUserFromARoomMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteUserFromARoom>>
>

export type DeleteUserFromARoomMutationError = ErrorType<ErrorResponseApiDTO>

export const useDeleteUserFromARoom = <
    TError = ErrorType<ErrorResponseApiDTO>,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteUserFromARoom>>,
        TError,
        { roomId: string; userId: string },
        TContext
    >
    request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
    Awaited<ReturnType<typeof deleteUserFromARoom>>,
    TError,
    { roomId: string; userId: string },
    TContext
> => {
    const mutationOptions = getDeleteUserFromARoomMutationOptions(options)

    return useMutation(mutationOptions)
}
export const getRoomBySlug = (
    roomSlug: string,
    options?: SecondParameter<typeof customInstance>,
    signal?: AbortSignal
) => {
    return customInstance<GetRoomElementApiDTO>(
        { url: `/room/${roomSlug}`, method: 'GET', signal },
        options
    )
}

export const getGetRoomBySlugQueryKey = (roomSlug: string) => {
    return [`/room/${roomSlug}`] as const
}

export const getGetRoomBySlugQueryOptions = <
    TData = Awaited<ReturnType<typeof getRoomBySlug>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    roomSlug: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomBySlug>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
) => {
    const { query: queryOptions, request: requestOptions } = options ?? {}

    const queryKey =
        queryOptions?.queryKey ?? getGetRoomBySlugQueryKey(roomSlug)

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getRoomBySlug>>> = ({
        signal,
    }) => getRoomBySlug(roomSlug, requestOptions, signal)

    return {
        queryKey,
        queryFn,
        enabled: !!roomSlug,
        ...queryOptions,
    } as UseQueryOptions<
        Awaited<ReturnType<typeof getRoomBySlug>>,
        TError,
        TData
    > & { queryKey: QueryKey }
}

export type GetRoomBySlugQueryResult = NonNullable<
    Awaited<ReturnType<typeof getRoomBySlug>>
>
export type GetRoomBySlugQueryError = ErrorType<ErrorResponseApiDTO>

export function useGetRoomBySlug<
    TData = Awaited<ReturnType<typeof getRoomBySlug>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    roomSlug: string,
    options: {
        query: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomBySlug>>,
                TError,
                TData
            >
        > &
            Pick<
                DefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomBySlug>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomBySlug<
    TData = Awaited<ReturnType<typeof getRoomBySlug>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    roomSlug: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomBySlug>>,
                TError,
                TData
            >
        > &
            Pick<
                UndefinedInitialDataOptions<
                    Awaited<ReturnType<typeof getRoomBySlug>>,
                    TError,
                    TData
                >,
                'initialData'
            >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRoomBySlug<
    TData = Awaited<ReturnType<typeof getRoomBySlug>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    roomSlug: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomBySlug>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetRoomBySlug<
    TData = Awaited<ReturnType<typeof getRoomBySlug>>,
    TError = ErrorType<ErrorResponseApiDTO>,
>(
    roomSlug: string,
    options?: {
        query?: Partial<
            UseQueryOptions<
                Awaited<ReturnType<typeof getRoomBySlug>>,
                TError,
                TData
            >
        >
        request?: SecondParameter<typeof customInstance>
    }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetRoomBySlugQueryOptions(roomSlug, options)

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
        queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
}
