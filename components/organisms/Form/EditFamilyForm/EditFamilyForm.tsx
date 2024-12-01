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
import { usePutRoom } from '@/src/api/generated/room'
import { formEditFamily } from '@/utils/schemas/family.schema'
import { translationPatchPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function EditFamilyForm({
    setOpen,
    roomId,
    currentTitle,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
    currentTitle?: string
}) {
    const router = useRouter()

    const formEditFamilyConst = useForm<z.infer<typeof formEditFamily>>({
        resolver: zodResolver(formEditFamily),
        defaultValues: {
            title: currentTitle || '',
        },
    })

    const { toast } = useToast()

    const { mutate, isPending, error } = usePutRoom({
        mutation: {
            onSuccess: async (data) => {
                toast({
                    variant: 'success',
                    title: 'Les informations de la familles on été modifiés',
                })
                setOpen(false)
                router.push(`/families/${data?.slug}`)
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formEditFamily>) => {
        await mutate({ roomId, data: { title: values.title } })
    }

    return (
        <Form {...formEditFamilyConst}>
            <form
                onSubmit={formEditFamilyConst.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex flex-col gap-[20px] w-full'}>
                    <div className={'w-full'}>
                        <FormField
                            control={formEditFamilyConst.control}
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
                    Modifier
                </Button>
            </form>
        </Form>
    )
}
