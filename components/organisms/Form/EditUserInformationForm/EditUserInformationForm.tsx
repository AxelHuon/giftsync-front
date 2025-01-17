import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/atoms/Avatar/Avatar'
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
import { useToast } from '@/hooks/useToast'
import { PatchUserApiBodies } from '@/src/api/generated/Api.schemas'
import { useGetUserById, usePatchUser } from '@/src/api/generated/user'
import { formEditUser } from '@/utils/schemas/user.schema'
import { translationPatchUserInformationsErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { returnGoodUrlPdpUser } from '@/utils/userPdpUrl'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function EditUserInformationForm() {
    const { data: session } = useSession()
    const { data: userData, refetch } = useGetUserById(session?.user?.id ?? '')

    const userPdpUrl = returnGoodUrlPdpUser(userData?.profilePicture ?? '')

    const form = useForm<z.infer<typeof formEditUser>>({
        resolver: zodResolver(formEditUser),
        defaultValues: {
            firstName: userData?.firstName ?? '',
            lastName: userData?.lastName ?? '',
            dateOfBirth: userData?.dateOfBirth
                ? new Date(userData?.dateOfBirth)
                : new Date(),
        },
    })

    const { toast } = useToast()

    const { mutate, isPending, error } = usePatchUser({
        mutation: {
            onSuccess: async () => {
                toast({
                    variant: 'success',
                    title: 'Vos informations ont bien été modifiées',
                })
                await refetch()
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formEditUser>) => {
        const data: PatchUserApiBodies = {
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: values.dateOfBirth.toString(),
        }
        if (values.profilePicture && values.profilePicture[0]) {
            data.profilePicture = values.profilePicture[0]
        }
        await mutate({
            userId: session?.user?.id ?? '',
            data: data,
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
                        <AvatarImage src={userPdpUrl} />
                        <AvatarFallback className={'bg-neutral-100'}>
                            <p className={'text-xl'}>
                                {userData?.firstName[0]}
                                {userData?.lastName[0]}
                            </p>
                        </AvatarFallback>
                    </Avatar>
                    <div className={'flex flex-col gap-[4px] relative'}>
                        <p className={'text-neutral-900 text-2xl font-500'}>
                            {userData?.firstName} {userData?.lastName}
                        </p>
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="profilePicture"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                            <FormLabel htmlFor="picture">
                                Changer de photo de profil
                            </FormLabel>
                            <FormControl>
                                <Input
                                    id="picture"
                                    type="file"
                                    onChange={(e) => onChange(e.target.files)}
                                    {...rest}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
