import { ToggleButtonMode } from '@/components/atoms/Buttons/ToggleButtonMode/ToggleButtonMode'
import LogoOnlySquare from '@/components/atoms/Logo/LogoOnlySquare'
import MenuSideBar from '@/components/layouts/SideBar/Partials/MenuSideBar'
import UserButton from '@/components/layouts/SideBar/Partials/UserButton'
import Colors from '@/utils/styles/colors'
import { useTheme } from 'next-themes'
import React from 'react'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
    const { theme, systemTheme } = useTheme()

    return (
        <section
            className={
                'hidden fixed tablet:flex flex-col justify-center items-center left-0 top-0 h-[100dvh] p-[42px]'
            }
        >
            <aside
                className={`h-[100%] w-[300px] bg-neutral-25 rounded-xl 
            }`}
            >
                <div
                    className={
                        'p-[25px] h-[100%] flex flex-col justify-between'
                    }
                >
                    <div className={'h-[70%] flex flex-col gap-[35px]'}>
                        <div className={'flex justify-center items-center'}>
                            <LogoOnlySquare
                                colorIcon={
                                    theme
                                        ? theme === 'system'
                                            ? systemTheme === 'light'
                                                ? Colors.Primary['500'].hex
                                                : Colors.Neutral['25'].hex
                                            : theme === 'light'
                                              ? Colors.Primary['500'].hex
                                              : Colors.Neutral['25'].hex
                                        : Colors.Primary['500'].hex
                                }
                                width={36}
                                height={38}
                            />
                        </div>
                        <MenuSideBar />
                    </div>
                    <div
                        className={
                            'h-[30%] flex flex-col gap-[15px] justify-end'
                        }
                    >
                        <ToggleButtonMode />

                        <UserButton />
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default SideBar
