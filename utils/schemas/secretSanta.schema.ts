/*Schema zod where we can have an array of user where user have email and name*/
import { notEmpty } from '@/utils/schemas/zod'
import { z } from 'zod'

export const UserSecretSanta = z.object({
    email: z.string().email("L'email n'est pas valide").pipe(notEmpty),
    name: z.string().pipe(notEmpty),
})

export const SecretSantaRequest = z.object({
    title: z.string().pipe(notEmpty),
    users: z
        .array(UserSecretSanta)
        .min(3, 'Il faut au moins 3 participants')
        .refine(
            (users) => {
                const emails = users.map((user) => user.email.toLowerCase())
                return new Set(emails).size === emails.length
            },
            {
                message: 'Les adresses email doivent être uniques',
                path: ['users'],
            }
        ),
    maxPrice: z.number().min(0, 'Le prix maximum doit être positif'),
})
