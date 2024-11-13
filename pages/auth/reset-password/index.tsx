import Logo from '@/components/atoms/Logo/Logo'
import { ResetPasswordForm } from '@/components/organisms/Form/ResetPasswordForm/ResetPasswordForm'
import Colors from '@/utils/styles/colors'
import { useTheme } from 'next-themes'
import React from 'react'

const Signing: React.FC = () => {
    const { theme } = useTheme()

    return (
        <section
            className={
                'container w-full m-auto laptop:w-1/2 gap-[20px] flex flex-col h-screen items-center justify-center'
            }
        >
            <aside className={'w-full flex gap-[20px] flex-col'}>
                <div className={'flex justify-center'}>
                    <Logo
                        width={250}
                        colorText={
                            theme === 'light'
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
                                'text-center text-2xl laptop:text-4xl font-variable font-600 text-neutral-900 '
                            }
                        >
                            Nouveau mot de passe 🧐
                        </h2>
                        <p
                            className={
                                'font-variable text-center  font-400 text-neutral-700'
                            }
                        >
                            Change ton mot de passe pour continuer !
                        </p>
                    </div>
                    <div className={'w-full laptop:max-w-[550px]'}>
                        <ResetPasswordForm />
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default Signing
