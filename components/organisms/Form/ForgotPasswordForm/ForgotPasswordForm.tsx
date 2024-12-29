import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import { Input } from '@/components/atoms/Input/input'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/organisms/Form/Form'
import { useForgotPassword } from '@/src/api/generated/auth'
import { formForgotPassword } from '@/utils/schemas/auth.schema'
import { translationForgotPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function ForgotPasswordForm() {
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formForgotPassword>>({
        resolver: zodResolver(formForgotPassword),
        defaultValues: {
            email: '',
        },
    })

    const {
        mutate: handleForgotPassword,
        isPending: isPendingForgotPassword,
        error: forgotPasswordError,
    } = useForgotPassword({ mutation: { onSuccess: () => setOpen(true) } })

    const onSubmit = async (values: z.infer<typeof formForgotPassword>) => {
        handleForgotPassword({ data: values })
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 w-full"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adresse mail</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="exemple@email.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Rentre l'email assoicié à ton compte
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {forgotPasswordError && (
                        <FormMessage>
                            {translationForgotPasswordErrorMessageApi(
                                forgotPasswordError?.response?.data?.code ??
                                    forgotPasswordError?.message
                            )}
                        </FormMessage>
                    )}
                    <Button
                        className={'w-full'}
                        disabled={isPendingForgotPassword}
                        type="submit"
                    >
                        {isPendingForgotPassword && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Connexion
                    </Button>
                </form>
            </Form>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[90%] laptop:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle className={'text-2xl font-500'}>
                            C'est presque terminé 📨
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className={'text-neutral-800 text-base'}>
                        Un mail vous a été envoyé pour réinitialiser votre mot
                        de passe. Verifiez votre boite mail et suivez les
                        instructions.
                    </DialogDescription>
                    <DialogDescription
                        className={'text-neutral-900 text-base font-500'}
                    >
                        Verifiez les spams si vous ne trouvez pas le mail.
                    </DialogDescription>
                    <DialogFooter className={'w-full'}>
                        <Button onClick={() => setOpen(false)}>
                            Compris !
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
