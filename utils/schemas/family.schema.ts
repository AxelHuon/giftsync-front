'use client'

import { notEmpty } from '@/utils/schemas/zod'
import { z } from 'zod'

export const formCreateFamily = z.object({
    title: z.string().min(3).max(20).pipe(notEmpty),
    emails: z.array(z.object({ email: z.string().email() })).default([]),
})

export const formInviteUserForm = z.object({
    emails: z.array(z.object({ email: z.string().email() })),
})

export const formEditFamily = z.object({
    title: z.string().min(3).max(20).pipe(notEmpty),
})
