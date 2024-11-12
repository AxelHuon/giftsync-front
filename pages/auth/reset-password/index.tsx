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
                'flex container flex-col laptop:flex-row h-screen justify-between py-[20px] mobileXL:py-[40px] laptop:py-[80px]'
            }
        >
            <aside
                className={
                    'w-full  flex flex-col gap-[40px]  justify-center laptop:pr-[40px] '
                }
            >
                <div className={'flex justify-center'}>
                    <Logo
                        width={200}
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
                                'text-center text-4xl laptop:text-5xl font-variable font-600 text-neutral-900 '
                            }
                        >
                            Nouveau mot de passe🧐
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
