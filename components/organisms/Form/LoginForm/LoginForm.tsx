import {
    Button,
    buttonVariants,
} from '@/components/atoms/Buttons/ClassicButton/Button'
import GoogleLoginButton from '@/components/atoms/Buttons/GoogleLoginButton/GoogleLoginButton'
import { Input } from '@/components/atoms/Input/input'
import { Separator } from '@/components/atoms/Separator/Separator'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/organisms/Form/Form'
import { formLoginSchema } from '@/utils/schemas/auth.schema'
import { translationSigninErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function LoginForm() {
    const [signInError, setSignInError] = useState<string | null>(null)

    const [isSigningIn, setIsSigningIn] = useState<boolean>(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
        setSignInError(null)
        setIsSigningIn(true)
        const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
        })
        setIsSigningIn(false)
        if (result?.error) {
            setSignInError(result?.error)
        } else {
            /*Get params callBackUrl*/
            const urlParams = new URLSearchParams(window.location.search)
            const callBackUrl = urlParams.get('callbackUrl')
            if (callBackUrl) {
                router.push(callBackUrl)
            } else {
                router.push('/dashboard')
            }
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-7 w-full"
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
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                {signInError && (
                    <FormMessage>
                        {translationSigninErrorMessageApi(signInError)}
                    </FormMessage>
                )}
                <div className={'flex justify-center'}>
                    <Link
                        href={'/auth/forgot-password'}
                        className={
                            buttonVariants({ variant: 'link' }) +
                            ' w-fit !p-0 h-fit'
                        }
                    >
                        Mot de passe oublié ?
                    </Link>
                </div>
                <Button
                    className={'w-full'}
                    disabled={isSigningIn}
                    type="submit"
                >
                    {isSigningIn && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Connexion
                </Button>
                <p className={'text-sm font-variable font-500 text-center'}>
                    Tu n'as pas encore de compte ?{' '}
                    <Link
                        href={'signup'}
                        className={
                            buttonVariants({ variant: 'link' }) +
                            '  w-fit !p-0 h-fit'
                        }
                    >
                        Inscris-toi
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
