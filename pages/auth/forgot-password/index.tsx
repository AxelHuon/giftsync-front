import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import Logo from '@/components/atoms/Logo/Logo'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'

import { ForgotPasswordForm } from '@/components/organisms/Form/ForgotPasswordForm/ForgotPasswordForm'
import { useAuthContext } from '@/hooks/useAuth'
import Colors from '@/utils/styles/colors'
import { GetServerSideProps } from 'next'
import { useTheme } from 'next-themes'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'

const Signing: React.FC = () => {
    const { theme, systemTheme } = useTheme()
    const { isSuccessForgotPassword } = useAuthContext()

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (isSuccessForgotPassword) {
            setOpen(true)
        }
    }, [isSuccessForgotPassword])

    return (
        <section
            className={
                'container m-auto w-full gap-[20px] flex flex-col h-screen items-center justify-center'
            }
        >
            <aside className={'w-full flex gap-[20px] flex-col'}>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-[90%] laptop:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className={'text-2xl font-500'}>
                                C'est presque terminé 📨
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription
                            className={'text-neutral-800 text-base'}
                        >
                            Un mail vous a été envoyé pour réinitialiser votre
                            mot de passe. Verifiez votre boite mail et suivez
                            les instructions.
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
                <div className={'flex justify-center'}>
                    <Logo
                        width={250}
                        colorText={
                            theme === 'system'
                                ? systemTheme === 'light'
                                    ? Colors.Neutral['900'].hex
                                    : Colors.Neutral['25'].hex
                                : theme === 'light'
                                  ? Colors.Neutral['900'].hex
                                  : Colors.Neutral['25'].hex
                        }
                        colorIcon={Colors.Primary['500'].hex}
                    />
                </div>
                <div className={'flex flex-col gap-[30px] items-center'}>
                    <div
                        className={
                            'flex flex-col max-w-2xl gap-[20px] items-center'
                        }
                    >
                        <h2
                            className={
                                'text-center text-2xl laptop:text-4xl font-variable font-500 text-neutral-900 '
                            }
                        >
                            Réinitialisation de mot de passe 🔐
                        </h2>
                        <p
                            className={
                                'font-variable text-center  font-400 text-neutral-700'
                            }
                        >
                            Pas de soucis, tu vas pouvoir retrouver ton mot de
                            passe en un rien de temps !
                        </p>
                    </div>
                    <div className={'w-full laptop:max-w-[550px]'}>
                        <ForgotPasswordForm />
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default Signing

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context)
    const token = cookies.auth_token
    if (token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}
