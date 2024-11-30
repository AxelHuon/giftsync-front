import { withAuthRoute } from '@/lib/withAuthRoute'
import { GetServerSideProps } from 'next'
import React from 'react'

const Home = () => {
    return <section>Rien ici pour l'instant</section>
}

export default Home

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
