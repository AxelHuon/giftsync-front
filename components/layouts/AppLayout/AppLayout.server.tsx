import MobileMenuBar from '@/components/layouts/MobileMenuBar/MobileMenuBar'
import SideBar from '@/components/layouts/SideBar/SideBar'
import { useSettings } from '@/providers/SettingsProvider'
import React from 'react'

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayoutServer: React.FC<AppLayoutProps> = ({ children }) => {
    const { sideBarIsOpen } = useSettings()

    return (
        <article className={'w-full px-[5%] flex justify-end'}>
            <SideBar />
            <MobileMenuBar />
            <div
                className={`transition transition-[width] w-full duration-200 ${
                    sideBarIsOpen
                        ? 'tablet:w-[calc(100%-350px)]'
                        : 'tablet:w-[calc(100%-160px)]'
                } py-5 tablet:py-10`}
            >
                {children}
            </div>
        </article>
    )
}

export default AppLayoutServer
