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
import { useCreateRoom } from '@/src/api/generated/room'
import { formCreateFamily } from '@/utils/schemas/family.schema'
import { translationPatchPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

export function CreateFamilyForm({
    setOpen,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const router = useRouter()

    const formCreateFamilyConst = useForm<z.infer<typeof formCreateFamily>>({
        resolver: zodResolver(formCreateFamily),
        defaultValues: {
            title: '',
            emails: [{ email: '' }],
        },
    })

    const { toast } = useToast()

    const { mutate, isPending, error } = useCreateRoom({
        mutation: {
            onSuccess: async (data) => {
                toast({
                    variant: 'success',
                    title: 'Vos informations ont bien été modifiées',
                })
                setOpen(false)
                await router.push(`/families/${data.slug}`)
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formCreateFamily>) => {
        const emailToSend = values.emails.map((email) => email.email)
        await mutate({
            data: { title: values.title, emails: emailToSend },
        })
    }

    const { fields, append, remove } = useFieldArray({
        control: formCreateFamilyConst.control,
        name: 'emails',
    })
    return (
        <Form {...formCreateFamilyConst}>
            <form
                onSubmit={formCreateFamilyConst.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex flex-col gap-[20px] w-full'}>
                    <div className={'w-full'}>
                        <FormField
                            control={formCreateFamilyConst.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de votre famille</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nom de votre famille"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <p>Invitez des membres à votre famille</p>
                    {fields.map((field, index) => (
                        <div
                            key={field.id}
                            className={`flex gap-2 items-end w-full ${formCreateFamilyConst.formState.errors.emails?.[index]?.email ? 'items-center' : 'items-end'}`}
                        >
                            <FormField
                                control={formCreateFamilyConst.control}
                                name={`emails.${index}.email`}
                                render={({ field }) => (
                                    <FormItem className={'w-3/4'}>
                                        <FormLabel>Adresse mail</FormLabel>
                                        <FormControl>
                                            <Input type={'text'} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                onClick={() => remove(index)}
                                className={'w-1/4'}
                                disabled={index === 0}
                                variant={'destructive'}
                            >
                                Supprimer
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant={'secondary'}
                        onClick={() => append({ email: '' })}
                        className="border w-fit border-neutral-200 text-neutral-900 gap-2"
                    >
                        Ajouter un membre
                        <PlusIcon width={16} />
                    </Button>
                </div>
                {error && (
                    <FormMessage>
                        {translationPatchPasswordErrorMessageApi(
                            error?.response?.data.code ?? error.message
                        )}
                    </FormMessage>
                )}
                <Button className={'w-fit'} disabled={isPending} type="submit">
                    {isPending && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Créer une famille
                </Button>
            </form>
        </Form>
    )
}
