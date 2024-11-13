import { Avatar, AvatarFallback } from '@/components/atoms/Avatar/Avatar'
import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import { Input } from '@/components/atoms/Input/input'
import { DatePicker } from '@/components/moleculs/DatePicker/DatePicker'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/organisms/Form/Form'
import { useAuthContext } from '@/hooks/useAuth'
import { useToast } from '@/hooks/useToast'
import {
    useGetUserById,
    usePatchUserInformations,
} from '@/src/api/generated/user'
import { formEditUser } from '@/utils/schemas/user.schema'
import { translationPatchUserInformationsErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function EditUserInformationForm() {
    const { authState } = useAuthContext()

    const { data: userBasedData, refetch } = useGetUserById(authState?.id ?? '')

    const form = useForm<z.infer<typeof formEditUser>>({
        resolver: zodResolver(formEditUser),
        defaultValues: {
            firstName: userBasedData?.firstName ?? '',
            lastName: userBasedData?.lastName ?? '',
            dateOfBirth: new Date(userBasedData?.dateOfBirth ?? ''),
        },
    })

    const { toast } = useToast()

    const {
        mutate,
        isPending: isPending,
        error,
    } = usePatchUserInformations({
        mutation: {
            onSuccess: async () => {
                toast({
                    variant: 'success',

                    title: 'Vos informations ont bien été modifiées',
                })
                await refetch()
            },
            onError: async (error) => {
                console.log(error)
            },
        },
    })
    const onSubmit = async (values: z.infer<typeof formEditUser>) => {
        await mutate({
            userId: authState?.id ?? '',
            data: {
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: values.dateOfBirth.toISOString(),
            },
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex items-center gap-[15px]'}>
                    <Avatar className={'w-[72px] h-[72px]'}>
                        <AvatarFallback className={'bg-neutral-100'}>
                            <p className={'text-xl'}>
                                {userBasedData?.firstName[0]}
                                {userBasedData?.lastName[0]}
                            </p>
                        </AvatarFallback>
                    </Avatar>
                    <div className={'flex flex-col gap-[4px] relative'}>
                        <p className={'text-neutral-900 text-2xl font-500'}>
                            {userBasedData?.firstName} {userBasedData?.lastName}
                        </p>
                        <p className={'text-base hover:underline'}>
                            Changer de photo de profils
                        </p>
                        <Input
                            className={'opacity-0 absolute bottom-0'}
                            id="picture"
                            type="file"
                        />
                    </div>
                </div>
                <div className={'flex gap-[20px] w-full'}>
                    <div className={'w-1/2'}>
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={'w-1/2'}>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Prénom"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                            <FormLabel>Date de naissance</FormLabel>
                            <DatePicker
                                date={field.value}
                                setDate={field.onChange}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error && (
                    <FormMessage>
                        {translationPatchUserInformationsErrorMessageApi(
                            error?.response?.data.code ?? error.message
                        )}
                    </FormMessage>
                )}
                <Button className={'w-fit'} disabled={isPending} type="submit">
                    {isPending && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Modifier les informations
                </Button>
            </form>
        </Form>
    )
}
