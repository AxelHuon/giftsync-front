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
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
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
                await router.push(`/family/${data.slug}`)
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formCreateFamily>) => {
        await mutate({
            data: values,
        })
    }

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
