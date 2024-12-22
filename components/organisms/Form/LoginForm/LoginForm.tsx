import {
    Button,
    buttonVariants,
} from '@/components/atoms/Buttons/ClassicButton/Button'
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
import { useAuthContext } from '@/hooks/useAuth'
import { toast } from '@/hooks/useToast'
import { SignInUserResponseApiDTO } from '@/src/api/generated/Api.schemas'
import { useSignInUserWithGoogle } from '@/src/api/generated/auth'
import { formLoginSchema } from '@/utils/schemas/auth.schema'
import { translationSigninErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function LoginForm() {
    const { handleLogin, signInError, isSigningIn, onSucessLoginGoogle } =
        useAuthContext()

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
        await handleLogin({ data: values })
    }

    const { mutate } = useSignInUserWithGoogle({
        mutation: {
            onSuccess: (data: SignInUserResponseApiDTO) => {
                onSucessLoginGoogle(data)
            },
            onError: () => {
                toast({
                    variant: 'destructive',
                    title: 'Une erreur est survenue',
                })
            },
        },
    })

    const loginWithGoogle = (res: CredentialResponse) => {
        if (res.credential) {
            mutate({
                data: {
                    idToken: res.credential,
                },
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
                        {translationSigninErrorMessageApi(
                            signInError?.response?.data?.code ??
                                signInError?.message
                        )}
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
                    Vous n'avez pas encore de compte ?{' '}
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
                <Separator className={'my-7 w-2/3 bg-neutral-700'} />
                <GoogleLogin
                    text={'continue_with'}
                    logo_alignment={'center'}
                    onSuccess={(res: CredentialResponse) =>
                        loginWithGoogle(res)
                    }
                />
            </div>
        </Form>
    )
}
