import { z } from 'zod'

export const formEditUser = z.object({
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.date({
        required_error: 'La date de naissance est requise',
    }),
})
