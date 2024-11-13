import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import { SecretSantaForm } from '@/components/organisms/Form/SecretSantaForm/SecretSantaForm'
import React from 'react'

const SecretSanta: React.FC = () => {
    return (
        <AppLayoutServer>
            <div className={'flex flex-col gap-[21px] m-auto max-w-[1000px]'}>
                <div className={'flex flex-col gap-3'}>
                    <h1 className={'text-3xl font-600'}>Secret Santa 🎁</h1>
                </div>
                <SecretSantaForm />
            </div>
        </AppLayoutServer>
    )
}

export default SecretSanta
