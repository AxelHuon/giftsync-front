import { ToggleButtonMode } from '@/components/atoms/Buttons/ToggleButtonMode/ToggleButtonMode'
import LogoOnlySquare from '@/components/atoms/Logo/LogoOnlySquare'
import { Separator } from '@/components/atoms/Separator/Separator'
import ArrowButtonToggleSideBar from '@/components/layouts/SideBar/Partials/ArrowButtonToggleSideBar'
import MenuSideBar from '@/components/layouts/SideBar/Partials/MenuSideBar'
import UserButton from '@/components/layouts/SideBar/Partials/UserButton'
import { useSettings } from '@/providers/SettingsProvider'
import Colors from '@/utils/styles/colors'
import { useTheme } from 'next-themes'
import React from 'react'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
    const { sideBarIsOpen } = useSettings()
    const { theme } = useTheme()

    return (
        <section
            className={`hidden fixed tablet:flex flex-col justify-between left-0 top-0 h-[100dvh] bg-neutral-50 transition-property:width duration-200 ${
                sideBarIsOpen ? 'w-[300px]' : 'w-[145px]'
            }`}
        >
            <ArrowButtonToggleSideBar />
            <aside
                className={'p-[25px] h-[100%] flex flex-col justify-between'}
            >
                <div className={'h-[70%] flex flex-col gap-[18px]'}>
                    <div className={'flex justify-center items-center'}>
                        <LogoOnlySquare
                            colorIcon={
                                theme === 'light'
                                    ? Colors.Primary['500'].hex
                                    : Colors.Neutral['25'].hex
                            }
                            width={32}
                            height={34}
                        />
                    </div>
                    <Separator className={'bg-neutral-200'} />
                    <MenuSideBar />
                </div>
                <div className={'h-[30%] flex flex-col gap-[15px] justify-end'}>
                    <ToggleButtonMode />
                    <UserButton />
                </div>
            </aside>
        </section>
    )
}

export default SideBar
