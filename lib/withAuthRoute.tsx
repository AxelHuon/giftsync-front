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

        if (token) {
            /*Verify token, if he is$ not valid return on signin page and delete from local storage the token*/
        }

        const gsspData = await gssp(context)

        return {
            ...gsspData,
            props: {
                ...((gsspData as any)?.props || {}),
                token,
            },
        }
    }
}
