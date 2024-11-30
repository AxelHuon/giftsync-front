'use client'

import { notEmpty } from '@/utils/schemas/zod'
import { z } from 'zod'

export const formCreateFamily = z.object({
    title: z.string().pipe(notEmpty),
})
