import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import GoogleIcon from '@/components/atoms/Icons/GoogleIcon'
import { useAuthContext } from '@/hooks/useAuth'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'

const GoogleLoginButton: React.FC = () => {
    const { handleLoginGoogle } = useAuthContext()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>
            handleLoginGoogle({ data: { idToken: codeResponse.access_token } }),
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
