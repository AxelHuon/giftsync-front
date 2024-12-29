// ./types/next-auth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth'

// On étend le module 'next-auth' pour ajouter nos champs custom
declare module 'next-auth' {
    interface User extends DefaultUser {
        // Champs par défaut : id, email, etc. + on ajoute ce qu'on veut
        id: string
        accessToken?: string
        refreshToken?: string
    }

    interface Session extends DefaultSession {
        user?: User
    }
}

declare module 'next-auth/jwt' {
    // On étend le type du JWT aussi, pour pouvoir stocker ces champs
    interface JWT {
        id?: string
        accessToken?: string
        refreshToken?: string
        accessTokenExpires?: number
    }
}
