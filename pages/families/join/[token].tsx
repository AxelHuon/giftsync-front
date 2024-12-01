import { useAuthContext } from '@/hooks/useAuth'
import { useJoinRoom } from '@/src/api/generated/room'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const JoinFamily: React.FC = () => {
    const router = useRouter()
    const { token } = router.query
    const { authState } = useAuthContext()
    const { mutate, isPending } = useJoinRoom({
        mutation: {
            onSuccess: async (data) => {
                await router?.push(`/families/${data?.roomSlug}`)
            },
        },
    })

    useEffect(() => {
        if (token) {
            if (authState?.email) {
                const tokenToSend = token as string
                mutate({
                    token: tokenToSend,
                    data: { email: authState?.email },
                })
            } else {
                localStorage.setItem('tokenInviteRoot', token as string)
                router?.push('/auth/signin')
            }
        }
    }, [authState, token])

    return <div></div>
}

export default JoinFamily
