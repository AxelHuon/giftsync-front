import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession()

    return (
        <AppLayoutServer>
            <p>dsqdqs</p>
        </AppLayoutServer>
    )
}

export default Dashboard
