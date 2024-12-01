import ButtonSettings from '@/components/template/FamilySlug/Partials/ButtonSettings'
import { useAuthContext } from '@/hooks/useAuth'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { useGetRoomById } from '@/src/api/generated/room'
import { useGetUserById } from '@/src/api/generated/user'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FamilySinglePage: React.FC = () => {
    /*get [slug] params*/
    const router = useRouter()
    const { slug } = router.query
    const { authState } = useAuthContext()
    const { data: user } = useGetUserById(authState?.id ?? '')
    const { data: familyData } = useGetRoomById(slug as string)
    const [isOwner, setIsOwner] = useState<boolean>(false)
    useEffect(() => {
        if (user && familyData) {
            if (user?.id === familyData?.ownerId) {
                setIsOwner(true)
            }
        }
    }, [user, familyData])

    return (
        <div>
            <div className={'flex justify-between'}>
                <h1
                    className={
                        'text-2xl laptop:text-4xl font-variable font-600 text-neutral-900 '
                    }
                >
                    {familyData?.title}
                </h1>
                <ButtonSettings
                    ownerId={familyData?.ownerId}
                    users={familyData?.users}
                    currentTitle={familyData?.title}
                    isOwner={isOwner}
                    roomId={familyData?.id ?? ''}
                />
            </div>
        </div>
    )
}

export default FamilySinglePage

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
