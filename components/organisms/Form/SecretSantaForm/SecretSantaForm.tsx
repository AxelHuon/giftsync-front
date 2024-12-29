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
import { useToast } from '@/hooks/useToast'
import { usePostSecretSanta } from '@/src/api/generated/secret-santa'
import { useGetUserById } from '@/src/api/generated/user'
import { SecretSantaRequest } from '@/utils/schemas/secretSanta.schema'
import { translationResetPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

export function SecretSantaForm() {
    const { data: session } = useSession()

    const { data: userBasedData } = useGetUserById(session?.user?.id ?? '')

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
                <div className={'flex gap-[20px] laptop:gap-[43px]'}>
                    <div className={'w-1/2'}>
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
                    <div className={'w-1/2'}>
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
                </div>
                <div
                    className={
                        'w-full grid gap-[20px] grid-cols-1 laptop:grid-cols-2 laptop:gap-[43px]'
                    }
                >
                    {fields.map((field, index) => (
                        <div className={'flex w-full flex-col gap-3'}>
                            <p className={'font-500 text-xl'}>
                                Personne {index + 1}
                            </p>
                            <div
                                key={field.id}
                                className="flex relative flex-col p-[20px] rounded-xl border border-neutral-500 gap-4 items-start"
                            >
                                <div className={'w-full'}>
                                    <FormField
                                        control={form.control}
                                        name={`users.${index}.name`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type={'text'}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className={'w-full'}>
                                    <FormField
                                        control={form.control}
                                        name={`users.${index}.email`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button
                                    type={'button'}
                                    disabled={index <= 2}
                                    className={
                                        'absolute  disabled:opacity-0 top-[-15px] right-[-15px]'
                                    }
                                    onClick={() => remove(index)}
                                    variant={'destructive'}
                                    size={'icon'}
                                >
                                    <TrashIcon width={'16'} />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={() => append({ name: '', email: '' })}
                        className={'flex w-full flex-col gap-3 cursor-pointer'}
                    >
                        <p className={'font-500 text-xl'}>
                            Ajouter une personne
                        </p>
                        <div className="flex h-[202px] hover:border-primary-500 transition-all duration-150 border-dashed relative p-[20px] rounded-xl border border-neutral-500 gap-4 items-center justify-center">
                            <PlusIcon width={'30'} />
                        </div>
                    </div>
                </div>
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
                    Envoyer
                </Button>
            </form>
        </Form>
    )
}
