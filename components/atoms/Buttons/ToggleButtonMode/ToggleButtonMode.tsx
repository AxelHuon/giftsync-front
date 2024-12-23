'use client'

import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export function ToggleButtonMode() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true) // Assurez-vous que le composant est monté côté client
    }, [])

    if (!mounted) {
        // Retournez un placeholder ou rien tant que le composant n'est pas monté
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'outline'}
                    className={`flex items-center justify-start gap-[8px]`}
                >
                    {theme === 'light' ? (
                        <Sun size={20} />
                    ) : theme === 'dark' ? (
                        <Moon size={20} />
                    ) : (
                        <Sun size={20} />
                    )}
                    <p className={'font-400 text-sm'}>Changer le thème</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'bg-neutral-25'} align="center">
                <DropdownMenuItem
                    className={'text-neutral-900'}
                    onClick={() => setTheme('light')}
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
