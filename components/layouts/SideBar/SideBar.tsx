import ArrowButtonToggleSideBar from '@/components/layouts/SideBar/Partials/ArrowButtonToggleSideBar'
import UserButton from '@/components/layouts/SideBar/Partials/UserButton'
import { useSettings } from '@/providers/SettingsProvider'
import React from 'react'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
    const { sideBarIsOpen } = useSettings()

    return (
        <section
            className={`hidden fixed tablet:flex flex-col justify-between left-0 top-0 h-[100dvh] bg-neutral-50 transition-property:width duration-200 ${
                sideBarIsOpen ? 'w-[350px]' : 'w-[145px]'
            }`}
        >
            <ArrowButtonToggleSideBar />
            <aside
                className={'p-[20px] h-[100%] flex flex-col justify-between'}
            >
                <div className={'h-[80%]'}></div>
                <div className={'h-[20%] flex flex-col justify-end'}>
                    <UserButton />
                </div>
            </aside>
        </section>
    )
}

export default SideBar
