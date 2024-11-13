/*Schema zod where we can have an array of user where user have email and name*/
import { z } from 'zod'

export const UserSecretSanta = z.object({
    email: z.string().email(),
    name: z.string(),
})

export const SecretSantaRequest = z.object({
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
