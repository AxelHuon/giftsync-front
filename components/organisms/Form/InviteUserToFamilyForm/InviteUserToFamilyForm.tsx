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
import { useInviteUsers } from '@/src/api/generated/room'
import { formInviteUserForm } from '@/utils/schemas/family.schema'
import { translationPatchPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

export function InviteUserToFamilyForm({
    setOpen,
    roomId,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
}) {
    const formInviteUsersConst = useForm<z.infer<typeof formInviteUserForm>>({
        resolver: zodResolver(formInviteUserForm),
        defaultValues: {
            emails: [{ email: '' }],
        },
    })

    const { toast } = useToast()

    const { fields, append, remove } = useFieldArray({
        control: formInviteUsersConst.control,
        name: 'emails',
    })

    const { mutate, isPending, error } = useInviteUsers({
        mutation: {
            onSuccess: async (data) => {
                toast({
                    variant: 'success',
                    title: 'Les invitations ont été envoyées',
                })
                setOpen(false)
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formInviteUserForm>) => {
        const emails = values.emails.map((email) => email.email)
        await mutate({
            data: {
                emails: emails,
                roomId: roomId,
            },
        })
    }

    return (
        <Form {...formInviteUsersConst}>
            <form
                onSubmit={formInviteUsersConst.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex flex-col gap-[20px] w-full'}>
                    {fields.map((field, index) => (
                        <div
                            key={field.id}
                            className={`flex gap-2 items-end w-full ${formInviteUsersConst.formState.errors.emails?.[index]?.email ? 'items-center' : 'items-end'}`}
                        >
                            <FormField
                                control={formInviteUsersConst.control}
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
                </div>
                <Button
                    type="button"
                    variant={'secondary'}
                    onClick={() => append({ email: '' })}
                    className="border w-fit border-neutral-200 text-neutral-900 gap-2"
                >
                    Ajouter un membre
                    <PlusIcon width={16} />
                </Button>

                {error && (
                    <FormMessage>
                        {translationPatchPasswordErrorMessageApi(
                            error?.response?.data.code ?? error.message
                        )}
                    </FormMessage>
                )}
                <Button className={'w-full'} disabled={isPending} type="submit">
                    {isPending && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Envoyer
                </Button>
            </form>
        </Form>
    )
}
