import Logo from '@/components/atoms/Logo/Logo'

import { ForgotPasswordForm } from '@/components/organisms/Form/ForgotPasswordForm/ForgotPasswordForm'
import Colors from '@/utils/styles/colors'
import { useTheme } from 'next-themes'
import React from 'react'

const Signing: React.FC = () => {
    const { theme, systemTheme } = useTheme()

    return (
        <section
            className={
                'container m-auto w-full gap-[20px] flex flex-col h-screen items-center justify-center'
            }
        >
            <aside className={'w-full flex gap-[20px] flex-col'}>
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
