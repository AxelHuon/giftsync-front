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
import { formResetPassword } from '@/utils/schemas/auth.schema'
import { translationResetPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function ResetPasswordForm() {
    const form = useForm<z.infer<typeof formResetPassword>>({
        resolver: zodResolver(formResetPassword),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    })

    const { handleResetPassword, resetPasswordError, isPendingResetPassword } =
        useAuthContext()

    const onSubmit = async (values: z.infer<typeof formResetPassword>) => {
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')
        if (token) {
            handleResetPassword({
                data: { newPassword: values.password, token: token },
            })
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full"
            >
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    type={'password'}
                                    placeholder="Mot de passe"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmation de mot de passe</FormLabel>
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
                {resetPasswordError && (
                    <FormMessage>
                        {translationResetPasswordErrorMessageApi(
                            resetPasswordError?.response?.data.code ??
                                resetPasswordError.message
                        )}
                    </FormMessage>
                )}
                <Button
                    className={'w-full'}
                    disabled={isPendingResetPassword}
                    type="submit"
                >
                    {isPendingResetPassword && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Connexion
                </Button>
            </form>
        </Form>
    )
}
