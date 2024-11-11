// components/withAuth.tsx
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export function withAuthRoute(gssp: GetServerSideProps) {
    return async (context: GetServerSidePropsContext) => {
        const cookies = parseCookies(context)
        const token = cookies.auth_token

        if (!token) {
            return {
                redirect: {
                    destination: '/auth/signin',
                    permanent: false,
                },
            }
        }

        // Appel de la fonction getServerSideProps d'origine
        const gsspData = await gssp(context)

        // Fusion des props
        return {
            ...gsspData,
            props: {
                ...((gsspData as any)?.props || {}),
                token,
            },
        }
    }
}
