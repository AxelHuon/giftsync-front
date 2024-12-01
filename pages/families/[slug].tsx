import ButtonSettings from '@/components/template/FamilySlug/Partials/ButtonSettings'
import { useGetRoomById } from '@/src/api/generated/room'
import { useRouter } from 'next/router'
import React from 'react'

const FamilySinglePage: React.FC = () => {
    /*get [slug] params*/
    const router = useRouter()
    const { slug } = router.query

    const { data: familyData } = useGetRoomById(slug as string)
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
                <ButtonSettings roomId={familyData?.id ?? ''} />
            </div>
        </div>
    )
}

export default FamilySinglePage
