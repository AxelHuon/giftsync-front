import { z } from 'zod'

export const notEmpty = z
    .string()
    .trim()
    .min(1, { message: 'Ce champs est obligatoire' })
