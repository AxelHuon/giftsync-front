import { useGetRoomById } from '@/src/api/generated/room'
import { useRouter } from 'next/router'
import React from 'react'

const FamilySinglePage: React.FC = () => {
    /*get [slug] params*/
    const router = useRouter()
    const { slug } = router.query

    const { data } = useGetRoomById(slug as string)

    return <div>{data?.ownerId}</div>
}

export default FamilySinglePage
