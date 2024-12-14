import { withAuthRoute } from '@/lib/withAuthRoute'
import { GetServerSideProps } from 'next'
import React from 'react'

const Dashboard = () => {
    return <></>
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
