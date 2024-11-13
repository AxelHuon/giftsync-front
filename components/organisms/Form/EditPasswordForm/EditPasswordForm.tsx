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
import { usePatchPassword } from '@/src/api/generated/user'
import { formEditPassword } from '@/utils/schemas/user.schema'
import { translationPatchPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function EditPasswordForm() {
    const { authState } = useAuthContext()

    const formEditPasswordConst = useForm<z.infer<typeof formEditPassword>>({
        resolver: zodResolver(formEditPassword),
        defaultValues: {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        },
    })

    const { toast } = useToast()

    const { mutate, isPending, error } = usePatchPassword({
        mutation: {
            onSuccess: async () => {
                toast({
                    variant: 'success',
                    title: 'Vos informations ont bien été modifiées',
                })
            },
        },
    })

    const onSubmit = async (values: z.infer<typeof formEditPassword>) => {
        await mutate({
            userId: authState?.id ?? '',
            data: values,
        })
    }

    return (
        <Form {...formEditPasswordConst}>
            <form
                onSubmit={formEditPasswordConst.handleSubmit(onSubmit)}
                className="flex flex-col gap-[25px] w-full"
            >
                <div className={'flex flex-col gap-[20px] w-full'}>
                    <div className={'w-full'}>
                        <FormField
                            control={formEditPasswordConst.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mot de passe actuel</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'password'}
                                            placeholder="Mot de passe actuel"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={'flex gap-[20px] w-full'}>
                        <div className={'w-1/2'}>
                            <FormField
                                control={formEditPasswordConst.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nouveau mot de passe
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'password'}
                                                placeholder="Nouveau mot de passe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'w-1/2'}>
                            <FormField
                                control={formEditPasswordConst.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Confirmation de mot de passe
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type={'password'}
                                                placeholder="Confirmation de mot de passe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
                    Modifier le mot de passe
                </Button>
            </form>
        </Form>
    )
}
