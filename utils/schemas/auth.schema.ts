'use client';

import { z } from 'zod';

export const formLoginSchema = z.object({
  email: z
    .string()
    .email("Le format de l'adresse mail n'est pas bon")
    .min(2, "L'adresse mail doit faire plus de 2 caractères")
    .max(50, "L'adresse mail doit faire moins de 50 caractères"),
  password: z
    .string()
    .min(4, 'Le mot de passe doit faire plus de 4 caractères')
    .max(50, "L'adresse mail doit faire moins de 50 caractères"),
});

export const formRegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'Le prénom doit faire plus de 2 caractères')
      .max(50, 'Le prénom doit faire moins de 50 caractères'),
    lastName: z
      .string()
      .min(2, 'Le nom doit faire plus de 2 caractères')
      .max(50, 'Le nom doit faire moins de 50 caractères'),
    email: z
      .string()
      .email("Le format de l'adresse mail n'est pas bon")
      .min(2, "L'adresse mail doit faire plus de 2 caractères")
      .max(50, "L'adresse mail doit faire moins de 50 caractères"),
    password: z
      .string()
      .min(4, 'Le mot de passe doit faire plus de 4 caractères')
      .max(50, 'Le mot de passe doit faire moins de 50 caractères'),
    confirmPassword: z
      .string()
      .min(4, 'Le mot de passe doit faire plus de 4 caractères')
      .max(50, 'Le mot de passe doit faire moins de 50 caractères'),
  })
  .refine(
    (values) => values.password === values.confirmPassword,
    {
      message: 'Les mots de passe doivent correspondre',
      path: ['confirmPassword'],
    }
  );