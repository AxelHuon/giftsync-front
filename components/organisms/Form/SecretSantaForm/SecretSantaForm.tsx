import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import { Input } from '@/components/atoms/Input/input'
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
import { usePostSecretSanta } from '@/src/api/generated/secret-santa'
import { useGetUserById } from '@/src/api/generated/user'
import { SecretSantaRequest } from '@/utils/schemas/secretSanta.schema'
import { translationResetPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { PlusIcon, TrashIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

export function SecretSantaForm() {
    const { authState } = useAuthContext()

    const { data: userBasedData } = useGetUserById(authState?.id ?? '')

    const form = useForm<z.infer<typeof SecretSantaRequest>>({
        resolver: zodResolver(SecretSantaRequest),
        defaultValues: {
            users: [
                {
                    name: '',
                    email: '',
                },
                { name: '', email: '' },
                { name: '', email: '' },
            ],
            maxPrice: 20,
            title: '',
        },
    })

    useEffect(() => {
        if (userBasedData) {
            form.reset({
                ...form.getValues(),
                users: [
                    {
                        name: `${userBasedData.firstName} ${userBasedData.lastName}`,
                        email: userBasedData.email,
                    },
                    ...form.getValues().users.slice(1),
                ],
            })
        }
    }, [userBasedData, form])

    const { toast } = useToast()

    const { mutate, isPending, error } = usePostSecretSanta({
        mutation: {
            onSuccess: async () => {
                toast({
                    variant: 'success',
                    title: 'Les invitations ont bien été envoyées',
                })
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof SecretSantaRequest>) => {
        mutate({ data: values })
    }

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'users',
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex gap-3'}>
                    <div className={'laptop:w-1/2'}>
                        <FormField
                            control={form.control}
                            name="maxPrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prix maximum</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="number"
                                            min="0"
                                            onChange={(e) => {
                                                const value = e.target.value
                                                // Convertir la valeur en nombre ou mettre à zéro si vide
                                                field.onChange(
                                                    value ? Number(value) : 0
                                                )
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage
                                        className={
                                            'absolute left-0 bottom-[-10px]'
                                        }
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={'laptop:w-1/2'}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titre</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage
                                        className={
                                            'absolute left-0 bottom-[-10px]'
                                        }
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <p className={'text-lg text-neutral-900 font-500'}>
                    Rentrez les personnes que vous shouaitez invitez 🙋‍♂️
                </p>
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="flex flex-col laptop:flex-row p-[20px] rounded-xl border border-gray-500 gap-4 items-start"
                    >
                        <div className={'w-full laptop:w-1/2'}>
                            <FormField
                                control={form.control}
                                name={`users.${index}.name`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nom</FormLabel>
                                        <FormControl>
                                            <Input type={'text'} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'w-full laptop:w-1/2'}>
                            <FormField
                                control={form.control}
                                name={`users.${index}.email`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            className={
                                'w-full flex items-center gap-2 bg-destructive-500 hover:bg-destructive-600 laptop:w-fit laptop:mt-[31px]'
                            }
                            disabled={index <= 2}
                            type="button"
                            onClick={() => remove(index)}
                        >
                            Supprimer ce participant
                            <TrashIcon width={'16'} />
                        </Button>
                    </div>
                ))}
                <Button
                    className={
                        'w-fit flex items-center gap-2 bg-green-600 hover:bg-green-700'
                    }
                    type="button"
                    onClick={() => append({ name: '', email: '' })}
                >
                    Ajouter un participant
                    <PlusIcon width={'16'} />
                </Button>
                {error && (
                    <FormMessage>
                        {translationResetPasswordErrorMessageApi(
                            error?.response?.data.code ?? error.message
                        )}
                    </FormMessage>
                )}
                <Button className={'w-fit'} disabled={isPending} type="submit">
                    {isPending && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Envoyer votre secret santa 🎁
                </Button>
            </form>
        </Form>
    )
}
