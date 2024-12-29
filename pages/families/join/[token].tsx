import { useJoinRoom } from '@/src/api/generated/room'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const JoinFamily: React.FC = () => {
    const router = useRouter()
    const { token } = router.query
    const { data: session } = useSession()
    const { mutate } = useJoinRoom({
        mutation: {
            onSuccess: async (data) => {
                await router?.push(`/families/${data?.roomSlug}`)
            },
        },
    })

    useEffect(() => {
        if (token) {
            if (session?.user?.email) {
                const tokenToSend = token as string
                mutate({
                    token: tokenToSend,
                    data: { email: session?.user?.email },
                })
            } else {
                localStorage.setItem('tokenInviteRoot', token as string)
                router?.push('/auth/signin')
            }
        }
    }, [session, token])

    return <div></div>
}

export default JoinFamily
