import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import ButtonSettingsFamilySlug from '@/components/template/FamilySlug/Partials/ButtonSettingsFamilySlug'
import { useGetRoomBySlug } from '@/src/api/generated/room'
import { useRouter } from 'next/router'
import React from 'react'

const FamilySinglePage: React.FC = () => {
    /*get [slug] params*/
    const router = useRouter()
    const { slug } = router.query
    const { data: familyData } = useGetRoomBySlug(slug as string)
    return (
        <AppLayoutServer>
            <div className={'flex flex-col gap-[100px]'}>
                <div className={'flex justify-between'}>
                    <h1
                        className={
                            'text-2xl laptop:text-4xl font-variable font-500 text-neutral-900 '
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
        </AppLayoutServer>
    )
}

export default FamilySinglePage
