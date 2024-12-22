// components/organisms/Form/RegisterForm/RegisterForm.tsx

import {
    Button,
    buttonVariants,
} from '@/components/atoms/Buttons/ClassicButton/Button'
import GoogleLoginButton from '@/components/atoms/Buttons/GoogleLoginButton/GoogleLoginButton'
import { Input } from '@/components/atoms/Input/input'
import { Separator } from '@/components/atoms/Separator/Separator'
import { DatePicker } from '@/components/moleculs/DatePicker/DatePicker'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/organisms/Form/Form'
import { useAuthContext } from '@/hooks/useAuth'
import { formRegisterSchema } from '@/utils/schemas/auth.schema'
import { translationSignupErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function RegisterForm() {
    const { handleRegister, isRegistering, isSigningIn, registerError } =
        useAuthContext()
    const form = useForm<z.infer<typeof formRegisterSchema>>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formRegisterSchema>) => {
        handleRegister({
            data: {
                email: values.email,
                password: values.password,
                dateOfBirth: values.dateOfBirth.toISOString(),
                firstName: values.firstName,
                lastName: values.lastName,
            },
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-7 w-full"
            >
                <div className={'flex justify-between gap-[20px]'}>
                    <div className={'w-1/2'}>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={'w-1/2'}>
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className={'flex justify-between items-center gap-[20px]'}>
                    <div className={'w-1/2'}>
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div
                        className={
                            'w-1/2 min-h-[72px] flex flex-col justify-end'
                        }
                    >
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
                    </div>
                </div>
                <div className={'flex justify-between gap-[20px]'}>
                    <div className={'w-1/2'}>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Mot de passe"
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
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Confirmer le mot de passe
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Confirmer le mot de passe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                {registerError && (
                    <FormMessage>
                        {translationSignupErrorMessageApi(
                            registerError?.response?.data?.code ??
                                registerError.message
                        )}
                    </FormMessage>
                )}
                <Button
                    className={'w-full'}
                    disabled={isRegistering || isSigningIn}
                    type="submit"
                >
                    {isRegistering ||
                        (isSigningIn && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        ))}
                    S'inscrire
                </Button>
                <p className={'text-sm font-variable font-500 text-center'}>
                    T'as déjà un compte ?{'  '}
                    <Link
                        href={'/auth/signin'}
                        className={
                            buttonVariants({ variant: 'link' }) +
                            '  w-fit !p-0 h-fit'
                        }
                    >
                        Connecte-toi
                    </Link>
                </p>
            </form>
            <div className={'flex justify-center flex-col items-center'}>
                <div className={'w-full flex items-center gap-3 my-7'}>
                    <Separator className={'w-2/6 bg-neutral-500'} />
                    <p
                        className={
                            'text-sm font-500 w-2/6 text-center text-neutral-500'
                        }
                    >
                        Ou continue avec
                    </p>
                    <Separator className={'w-2/6 bg-neutral-500'} />
                </div>
                <GoogleLoginButton />
            </div>
        </Form>
    )
}
