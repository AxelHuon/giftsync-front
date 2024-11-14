import { notEmpty } from '@/utils/schemas/zod'
import { z } from 'zod'

export const formEditUser = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    dateOfBirth: z.date({ required_error: 'La date de naissance est requise' }),
    profilePicture: z.any().optional(),
})

export const formEditPassword = z
    .object({
        oldPassword: z.string().pipe(notEmpty),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .max(50, 'Password must be at most 50 characters long')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            ),
        confirmPassword: z.string(),
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: 'Les mots de passe doivent correspondre',
        path: ['confirmPassword'],
    })
