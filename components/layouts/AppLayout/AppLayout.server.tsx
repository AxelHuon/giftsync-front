import MobileMenuBar from '@/components/layouts/MobileMenuBar/MobileMenuBar'
import SideBar from '@/components/layouts/SideBar/SideBar'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { GetServerSideProps } from 'next'
import React from 'react'

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayoutServer: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <article className={'w-full px-[5%] flex justify-end'}>
            <SideBar />
            <MobileMenuBar />
            <div
                className={` w-full duration-200  tablet:w-[calc(100%-300px)]
                 py-[42px]`}
            >
                {children}
            </div>
        </article>
    )
}

export default AppLayoutServer
export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
