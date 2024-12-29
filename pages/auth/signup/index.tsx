import Logo from '@/components/atoms/Logo/Logo'
import { RegisterForm } from '@/components/organisms/Form/RegisterForm/RegisterForm'
import Colors from '@/utils/styles/colors'
import { useTheme } from 'next-themes'
import React from 'react'

const Signup: React.FC = () => {
    const { theme, systemTheme } = useTheme()

    return (
        <section
            className={
                'container w-full py-10 laptop:py-0 laptop:w-1/2 gap-[20px] flex flex-col laptop:h-screen items-center justify-center'
            }
        >
            <aside className={'w-full flex gap-[20px] flex-col'}>
                <div className={'justify-center flex laptop:hidden'}>
                    <Logo
                        width={200}
                        height={50}
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
                            'flex flex-col max-w-xl gap-[20px] items-center'
                        }
                    >
                        <h2
                            className={
                                'text-center  max-w-2xl text-2xl laptop:text-4xl font-variable font-500 text-neutral-900 '
                            }
                        >
                            Inscrit toi pour commencer 🎉
                        </h2>
                        <p
                            className={
                                'font-variable text-center  font-400 text-neutral-700'
                            }
                        >
                            Rentre tes informations d’inscription ci-dessous !
                        </p>
                    </div>
                    <div className={'w-full laptop:max-w-[550px]'}>
                        <RegisterForm />
                    </div>
                </div>
            </aside>
            <aside
                className={
                    'laptop:w-1/2 top-0 w-full laptop:flex laptop:absolute laptop:right-0 laptop:p-[17px] laptop:h-full'
                }
            >
                <div
                    className={
                        'laptop:bg-[url("/images/background-login.png")] h-fit bg-center bg-cover bg-no-repeat laptop:h-full w-full flex items-center justify-center rounded-xl relative '
                    }
                >
                    <div className={'laptop:flex hidden'}>
                        <Logo
                            colorText={Colors.Neutral['25'].hex}
                            colorIcon={Colors.Neutral['25'].hex}
                        />
                    </div>
                    <div
                        className={
                            'laptop:absolute laptop:bottom-20 laptop:left-1/2 laptop:-translate-x-1/2 laptop:px-20 w-full text-center'
                        }
                    >
                        <p
                            className={`font-variable text-sm laptop:text-lg text-neutral-900 laptop:text-neutral-always25`}
                        >
                            Transformez la magie de Noël en un jeu d'enfant :
                            découvrez ce que vos proches désirent et organisez
                            vos cadeaux en un clin d'œil ! 🎁✨
                        </p>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default Signup
