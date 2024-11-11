import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { GetServerSideProps } from 'next'
import React from 'react'

const Home = () => {
    return <AppLayoutServer>Rien ici pour l'instant</AppLayoutServer>
}

export default Home

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
