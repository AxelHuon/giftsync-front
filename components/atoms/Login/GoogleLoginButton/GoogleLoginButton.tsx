// components/GoogleLoginButton.tsx
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React from 'react'

type GoogleLoginButtonProps = {
    onLoginSuccess: (credentialResponse: CredentialResponse) => void
    onLoginError?: () => void
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
    onLoginSuccess,
    onLoginError,
}) => {
    return (
        <div>
            <GoogleLogin
                text={'continue_with'}
                onSuccess={(credentialResponse) => {
                    onLoginSuccess(credentialResponse)
                }}
                onError={() => {
                    onLoginError && onLoginError()
                }}
            />
        </div>
    )
}

export default GoogleLoginButton
