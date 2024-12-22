import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { GetServerSideProps } from 'next'
import React from 'react'

const Dashboard = () => {
    return (
        <AppLayoutServer>
            <p>dsqdsq</p>
        </AppLayoutServer>
    )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
