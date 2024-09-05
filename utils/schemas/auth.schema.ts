'use client';

import { z } from 'zod';

export const formLoginSchema = z.object({
  email: z.string().email("Le format de l'adresse mail n'est pas bon"),
  password: z.string(),
});

export const formRegisterSchema = z
  .object({
    email: z.string().email('Invalid email format'),
    firstName: z
      .string({ required_error: 'First name must be a string' })
      .max(50, 'First name must be at most 50 characters long')
      .regex(/^[a-zA-Z]+$/, 'First name must contain only letters'),
    lastName: z
      .string({ required_error: 'Last name must be a string' })
      .max(50, 'Last name must be at most 50 characters long')
      .regex(/^[a-zA-Z]+$/, 'Last name must contain only letters'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must be at most 50 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      ),
    confirmPassword: z.string(),
    birthDay: z.date({
      required_error: 'La date de naissance est requise',
    }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Les mots de passe doivent correspondre',
    path: ['confirmPassword'],
  });
