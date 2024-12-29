// api/auth.ts (exemple)
import { customInstance } from '@/src/api/customInstance'
import type {
    SignInUserResponseApiDTO,
    SignInWithGoogleRequestApiDTO,
} from '@/src/api/generated/Api.schemas'

export const signInUserWithGoogle = async (
    body: SignInWithGoogleRequestApiDTO
) => {
    const data = await customInstance<SignInUserResponseApiDTO>({
        url: '/auth/signin-google',
        method: 'POST',
        data: body,
    })
    return data
}
