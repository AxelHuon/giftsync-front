import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import GoogleIcon from '@/components/atoms/Icons/GoogleIcon'
import { useGoogleLogin } from '@react-oauth/google'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const GoogleLoginButton: React.FC = () => {
    const router = useRouter()

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const result = await signIn('google-credentials', {
                idToken: codeResponse.access_token,
                redirect: false,
            })

            if (result?.ok) {
                const urlParams = new URLSearchParams(window.location.search)
                const callBackUrl = urlParams.get('callbackUrl')
                if (callBackUrl) {
                    router.push(callBackUrl)
                } else {
                    router.push('/dashboard')
                }
            } else {
                console.error('Google sign-in error:', result)
            }
        },
        flow: 'implicit',
    })

    return (
        <Button
            variant={'secondary'}
            size={'lg'}
            className={'flex items-center gap-2 w-full'}
            onClick={() => login()}
        >
            <GoogleIcon width={'17'} height={'17'} />
            Google
        </Button>
    )
}

export default GoogleLoginButton
