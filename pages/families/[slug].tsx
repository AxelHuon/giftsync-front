import ButtonSettingsFamilySlug from '@/components/template/FamilySlug/Partials/ButtonSettingsFamilySlug'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { useGetRoomBySlug } from '@/src/api/generated/room'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const FamilySinglePage: React.FC = () => {
    /*get [slug] params*/
    const router = useRouter()
    const { slug } = router.query
    const { data: familyData } = useGetRoomBySlug(slug as string)
    return (
        <div className={'flex flex-col gap-[100px]'}>
            <div className={'flex justify-between'}>
                <h1
                    className={
                        'text-2xl laptop:text-4xl font-variable font-600 text-neutral-900 '
                    }
                >
                    {familyData?.title}
                </h1>
                <ButtonSettingsFamilySlug
                    ownerId={familyData?.ownerId}
                    users={familyData?.users}
                    currentTitle={familyData?.title}
                    isOwner={familyData?.isOwner ?? false}
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
